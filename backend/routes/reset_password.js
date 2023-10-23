// ```
//     This file contains the route for resetting password
//     It accepts a resetToken in the request parameter and returns a response containing the user profile.
    
//     POST: /reset_password/:resetToken
//     Description: Reset user password
//     Request: {
//         "password": "string"
//     }
//     Response: {
//         "code": "string",
//         "message": "string",
//         "success": "boolean"
//     }

// ```;

// import modules
const express = require("express");
const validator = require("validator");
const router = express.Router();

// import middleware
const resetSender = require("../middleware/reset-middleware");

// import models
const { Reset } = require("../models/resetModel");
const { User } = require("../models/accountModel");

router.post("/:resetToken", async (req, res) => {
    try {
        let resetToken = req.params.resetToken;
        const user = await Reset.findOne({ resetToken: resetToken });
        if (!user) {
            return res.status(400).json({
                success: false,
                code: "Bad request",
                message: "Invalid resetToken",
            });
        }

        // if the password length is shorter than 5 return 400
        if (!validator.isLength(req.body.password, { min: 5 })) {
            return res.status(400).json({
                success: false,
                code: "Bad request",
                message: "Password must be at least 5 characters",
            });
        }

        const updatePassword = await User.findOneAndUpdate(
            { email: user.email },
            { password: req.body.password }
        );

        // console.log("updatePassword", updatePassword);
        // console.log("user.email", user.email);

        if (!updatePassword) {
            return res.status(400).json({
                success: false,
                code: "Bad request",
                message: "No user found with this email",
            });
        }

        return res.status(200).json({
            success: true,
            code: "OK",
            message: "Password updated successfully",
        });
    } catch (err) {
        console.log("Error updating password", err);
        return res.status(500).json({
            success: false,
            code: "Internal server error",
            message: "An error occured while updating password",
        });
    }
});

module.exports = router;
