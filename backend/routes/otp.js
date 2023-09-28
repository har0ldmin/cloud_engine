const express = require("express");
const router = express.Router();
const otpSender = require("../middleware/otp-middleware");

router.post("/", otpSender.sendOtp);

module.exports = router;
