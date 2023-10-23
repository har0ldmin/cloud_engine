// ```
//     THis is a middleware to send email using SMTP.
// ```;
// import modules
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendMail = async (email, title, body, authNumber) => {
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

        let sendOtp = await transporter.sendMail(mailOptions);
        return sendOtp;
    } catch (err) {
        throw err;
    }
};

module.exports = { sendMail };
