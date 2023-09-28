const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { User } = require("../models/account");

router.get("/", auth, (req, res) => {
    // #swagger.tags = ['Authentication']
    // Sample Custom Parameter Definition
    // /*	#swagger.parameters['obj'] = {
    //         in: 'body',
    //         description: 'User information.',
    //         required: true,
    //         schema: { $ref: "#/definitions/AddUser" }
    // } */
    res.status(200).json({
        code: "OK",
        message: "User authenticated successfully",
        // _id: req.user._id,
        // email: req.user.email,
        // surname: req.user.surname,
        // firstName: req.user.firstName,
        // title: req.user.title,
        isAuth: true,
    });
});

module.exports = router;
