const otpGenerator = require("otp-generator");
const { OTP } = require("../models/otpModel");
const mailer = require("./mailer");
const { User } = require("../models/account");
const validator = require("validator");

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                code: "Bad request",
                message: "Invalid email",
            });
        }
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(400).json({
                success: false,
                code: "Bad request",
                message: "Email already exists",
            });
        }

        // delete all previous otps for the entered email
        await OTP.deleteMany({ email });

        let otp = otpGenerator.generate(6, {
            upperCase: false,
            specialChars: false,
            alphabets: false,
        });

        let result = await OTP.findOne({ otp: otp });
        while (result) {
            otp = otpGenerator.generate(6, {
                upperCase: false,
                specialChars: false,
                alphabets: false,
            });
            result = await OTP.findOne({ otp: otp });
        }
        const otpPayload = {
            email,
            otp,
        };

        const newOtp = new OTP(otpPayload);
        await newOtp.save();

        return res.status(200).json({
            code: "OK",
            message: "OTP sent successfully",
            Sent: otp,
        });
    } catch (err) {
        // console.log("Error sending OTP", err);
        return res.status(500).json({
            success: false,
            code: "Internal server error",
            message: "An error occured while sending OTP",
        });
    }
};
