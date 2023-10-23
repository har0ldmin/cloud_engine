// ```
//     This route is used to log out the user.
//     It accepts a JSON Web Token (JWT) in the request header and returns a response indicating whether 
//     the user was successfully logged out or not.

//     POST: /logout
//     Description: Log out a user
//     Request: {
//         "createToken": "string"
//         "userId": "string"
//     }
//     Response: {
//         "code": "string",
//         "message": "string",
//         "success": "boolean",
//     }
// ```;

// import modules
const express = require("express");
const router = express.Router();

// import middleware
const { auth } = require("../middleware/auth");

// import models
const { User } = require("../models/accountModel");

router.post("/", auth, async (req, res) => {
    // #swagger.tags = ['Authentication']
    try {
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { token: "" });
        res.status(200).send({
            code: "OK",
            message: "User logged out successfully",
            logOutSuccess: true,
        });
    } catch (err) {
        res.status(500).json({
            code: "Internal Server Error",
            message: "An error occurred while logging out the user.",
            success: false,
            log: err,
        });
    }
});

module.exports = router;
