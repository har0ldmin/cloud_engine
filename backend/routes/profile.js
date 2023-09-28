const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
    // #swagger.tags = ['Authentication']
    // #swagger.description = 'Endpoint to get user profile'
    /* #swagger.security = [{
                "createdToken": []
        }] */

    try {
        const userProfile = req.user;
        return res.status(200).json({
            code: "OK",
            message: "User profile fetched successfully",
            surname: userProfile.surname,
            firstName: userProfile.firstName,
        });
    } catch (error) {
        // console.error("Error fetching user profile", error);
        return res.status(500).json({
            code: "Internal Server Error",
            message: "An error occurred while fetching user profile",
            success: false,
        });
    }
});

module.exports = router;
