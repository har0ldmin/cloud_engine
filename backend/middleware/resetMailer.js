// ```
//     This is a middleware function that sends the resetToken to the user's email address.
//     It accepts the user's email address in the request body and returns a response
//     indicating whether the resetToken was successfully sent or not.

// ```;

// import modules
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendResetMail = async (email, title, body, link) => {
    try {
        let transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: title,
            html: body,
        };

        let sendReset = await transporter.sendMail(mailOptions);
        // console.log("Email sent", sendOtp);

        return sendReset;
    } catch (err) {
        throw err;
    }
};

module.exports = { sendResetMail };
