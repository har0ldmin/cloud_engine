// ```
//     This route is used to validate the OTP sent to the user's email address.
//     It accepts the user's email address and the OTP in the request body and returns a response indicating whether the OTP was successfully validated or not.

//     POST: /validate_otp
//     Description: Validate OTP sent to user's email address
//     Request: {
//         "email": "string",
//         "otp": "string"
//     }
//     Response: {
//         "code": "string",
//         "message": "string",
//         "success": "boolean"
//     }   
// ```;

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
