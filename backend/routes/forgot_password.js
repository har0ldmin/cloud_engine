// ```
//     This route is used to send email to the received email address to reset the password.
//     It accepts an email in the request body and returns a 
//     response indicating whether the email was successfully sent or not.
//     POST: /forgot_password
//     Description: Send email to reset password
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
const resetSender = require("../middleware/reset-middleware");

router.post("/", resetSender.sendReset);

module.exports = router;
