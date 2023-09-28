const { Reset } = require("../models/resetModel");
const mailer = require("./resetMailer");
const { User } = require("../models/account");
const validator = require("validator");
const crypto = require("crypto");

exports.sendReset = async (req, res) => {
    try {
        const { email } = req.body;
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                code: "Bad request",
                message: "Invalid email",
            });
        }
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).json({
                success: false,
                code: "Bad request",
                message: "Email does not exsit",
            });
        }

        // delete all previous resetTokens for the entered email
        await Reset.deleteMany({ email });

        let resetToken = crypto.randomBytes(32).toString("hex");
        // console.log(resetToken);

        let result = await Reset.findOne({ resetToken: resetToken });

        while (result) {
            resetToken = crypto.randomBytes(16).toString("hex");
            result = await Reset.findOne({ resetToken: resetToken });
        }

        const resetPayload = {
            email,
            resetToken,
        };

        const newReset = new Reset(resetPayload);
        await newReset.save();

        return res.status(200).json({
            code: "OK",
            message: "ResetToken sent successfully",
            Sent: resetToken,
        });
    } catch (err) {
        console.log("Error sending ResetToken", err);
        return res.status(500).json({
            success: false,
            code: "Internal server error",
            message: "An error occured while sending ResetToken",
        });
    }
};
