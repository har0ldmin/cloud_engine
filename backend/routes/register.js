const express = require("express");
const router = express.Router();
const { body, validationResult, check } = require("express-validator");

const { User } = require("../models/account");

router.post(
    "/",
    [
        body("surname")
            .trim()
            .notEmpty()
            .withMessage("Surname is required.")
            .matches(/^[A-Za-z]+$/)
            .withMessage("Surname must contain only alphabets."),
        body("firstName").trim().notEmpty().withMessage("Last name is required."),
        body("email").isEmail().withMessage("Must be a valid email address."),
        body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long."),
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // If there are errors, send them back to the client.
            return res.status(400).json({
                code: "Bad request",
                message: "Sign up Schema Validation Error",
                errors: errors.array(),
            });
        }
        // check if user email already exists in database
        let existingUser;
        try {
            existingUser = await User.findOne({ email: req.body.email });
        } catch (error) {
            // console.error(error);
            return res.status(500).json({
                code: "Internal Server Error",
                message: "An error occurred while checking if user exists",
                success: false,
            });
        }

        if (existingUser) {
            return res.status(400).json({
                code: "Bad request",
                message: "Email already exists",
                errors: [{ msg: "User already exists" }],
            });
        }

        const user = new User(req.body);

        try {
            const userInfo = await user.save();
            res.status(200).json({
                code: "OK",
                message: "User registered successfully",
                success: true,
                // userInfo,
            });
        } catch (err) {
            res.status(500).json({
                code: "Internal Server Error",
                message: "An error occurred while registering user",
                success: false,
                log: err,
            });
        }
    }
);

module.exports = router;
