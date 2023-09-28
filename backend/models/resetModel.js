const mongoose = require("mongoose");
const mailer = require("../middleware/resetMailer");
const validator = require("validator");

const resetSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    resetToken: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 300, // deleted in 5 minutes
    },
});

async function sendReset(email, link) {
    try {
        console.log(link);
        const mailResponse = await mailer.sendResetMail(
            email,
            "Reset link Email",
            `<h1>Please press below link to reset password</h1>
             <p>Click this link: http://127.0.0.1:3000/reset_password/${link}</p>`,
            link
        );
        console.log("Email sent", mailResponse);
    } catch (err) {
        console.log("Error sending email", err);
        throw err;
    }
}

resetSchema.pre("save", async function (next) {
    console.log("new link", this);
    if (this.isNew) {
        try {
            await sendReset(this.email, this.resetToken);
            next();
        } catch (err) {
            return next(err);
        }
    }
});

const Reset = mongoose.model("Reset", resetSchema);
module.exports = { Reset };
