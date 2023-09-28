const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { User } = require("../models/account");

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
