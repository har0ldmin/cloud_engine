// ```
//     defining the route for the otp sender
//     This route sends the otp to the user's email address.
//     To verify for sign up, the otp is sent to the user's email address.

//     POST: /otp
//     Description: Send OTP to user's email address
//     Request: {
//         "email": "string"
//     }
//     Response: {
//         "code": "string",
//         "message": "string",
//         "success": "boolean"
//     }
    
// ```;

// import modules
const express = require("express");
const router = express.Router();

// import middleware
const otpSender = require("../middleware/otp-middleware");

router.post("/", otpSender.sendOtp);

module.exports = router;
