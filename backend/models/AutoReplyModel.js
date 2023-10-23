const mongoose = require("mongoose");
const mailer = require("../middleware/mailer");
const validator = require("validator");

const autoReplySchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    }
});

async function sendAutoReply(email) {
    try {
        const mailResponse = await mailer.sendMail(
            email,
            "[no-reply] Thank you for your request",
            `
            <body>
            <p style="font-weight: bolder;">Thank you for getting in touch with us.</p>
            <br>
            <p>Our normal business hours are Monday to Friday 9am to 5pm.</p>
            <p>
            We aim to get back to you with a response as soon as possible but depending on the number of enquiries we receive, this might take up to <a style="font-weight: bolder;">5 working days</a>. 
            <br>We understand the inconvenience the delay may cause and appreciate your continued patience.
            </p>
            <br>
            <p>
            Please note, we are experiencing high volumes of enquiries about applications to the University and applications for enrolment concessions.
            </p>
            <p>
            If you need help with your enrolment or structuring your degree, please come to our Student Hubs. <br>The team at any of our Student Hubs would be happy to discuss your enquiry with you in person. 
            <br>You can mention your reference number when you come in to get them up to speed with your enquiry.
            </p>
            <br>
            <p>
            You may also be able to find answers relating to your enquiry by checking out AskAuckland (www.askauckland.ac.nz)
            </p>
            <p>
            <br>
            <br>
            In New Zealand: <a style="color: blue;">0800 61 62 63</a> <br>
            Outside New Zealand: <a style="color: blue;">+64 9 373 7513</a>
            </p>
            <p>Cloud Engine</p>
            </body>
            `
        );
        console.log("Email sent", mailResponse);
    } catch (err) {
        console.log("Error sending email", err);
        throw err;
    }
}

autoReplySchema.pre("save", async function (next) {
    if (this.isNew) {
        try {
            await sendAutoReply(this.email);
            next();
        } catch (err) {
            return next(err);
        }
    }
});


const AutoReply = mongoose.model("AutoReply", autoReplySchema);
module.exports = { AutoReply };
