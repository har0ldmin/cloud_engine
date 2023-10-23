// ```
//     This file contains the route to get user profile
//     It accepts a JSON Web Token (JWT) in the request header and returns a response containing the user profile.

//     POST: /profile
//     Description: Get user profile
//     Request: {
//         "createToken": "string"
//         "userId": "string"
//     }
//     Response: {
//         "code": "string",
//         "message": "string",
//         "success": "boolean",
//         "surname": "string",
//         "firstName": "string",
//         "birthday": "string",
//         "gender": "string",
//         "phone": "string",
//         "address": "string",
//         "city": "string",
//         "postal_code": "string",
//         "email": "string"
//     }
// ```;

// import modules
const express = require("express");
const router = express.Router();

// import middleware
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
            birthday: userProfile.birthday,
            gender: userProfile.gender,
            phone: userProfile.phone,
            address: userProfile.address,
            city: userProfile.city,
            postal_code: userProfile.postal_code,
            email: userProfile.email,
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
