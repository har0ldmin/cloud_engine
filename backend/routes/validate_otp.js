const express = require("express");
const router = express.Router();
const { OTP } = require("../models/otpModel"); // import your otp model

router.post("/", async (req, res) => {
    // const otpRecord = await OTP.findOne({ email: req.body.email });
    let otpRecord;

    try {
        otpRecord = await OTP.findOne({ email: req.body.email });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: "Internal Server Error",
            message: "An error occurred while checking if otp sent",
            success: false,
        });
    }

    if (!otpRecord || otpRecord.otp !== req.body.otp) {
        return res.status(400).json({
            code: "Bad request",
            message: "Invalid or expired OTP",
            success: false,
        });
    }

    // If validation is successful then redirect to signup page
    return res.status(200).json({
        code: "OK",
        message: "OTP validated successfully",
        success: true,
    });
});

module.exports = router;
