// ```
//     This route is used authorize a user to access the application. 
//     It accepts a JSON Web Token (JWT) in the request header and returns 
//     a response indicating whether the user is authorized or not.
//     POST: /auth
//     Description: Authorize user
//     Request: {
//         "createToken": "string"
//         "userId": "string"
//     }
//     Response: {
//         "code": "string",
//         "message": "string",
//         "isAuth": "boolean"
//     }
    
// ```;

// import modules
const express = require("express");
const router = express.Router();

// import middleware
const { auth } = require("../middleware/auth");

// import models
const { User } = require("../models/accountModel");

router.post("/", auth, (req, res) => {
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
        isAuth: true,
    });
});

module.exports = router;
