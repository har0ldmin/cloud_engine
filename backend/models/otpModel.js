const mongoose = require("mongoose");
const mailer = require("../middleware/mailer");
const validator = require("validator");

const otpSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300, // deleted in 5 minutes
    },
});

async function sendOtp(email, otp) {
    try {
        const mailResponse = await mailer.sendMail(
            email,
            "Verification Email",
            `<h1>Please confirm your OTP</h1>
             <p>Here is your OTP code: ${otp}</p>`,
            otp
        );
        console.log("Email sent", mailResponse);
    } catch (err) {
        console.log("Error sending email", err);
        throw err;
    }
}

otpSchema.pre("save", async function (next) {
    console.log("new otp", this);
    if (this.isNew) {
        try {
            await sendOtp(this.email, this.otp);
            next();
        } catch (err) {
            return next(err);
        }
    }
});

const OTP = mongoose.model("OTP", otpSchema);
module.exports = { OTP };
