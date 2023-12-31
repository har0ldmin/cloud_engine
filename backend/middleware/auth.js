// ```
//     This is the middleware that is used to authenticate the user.
//     It accepts a JSON Web Token (JWT) in the request body and returns a response indicating whether the user is authorized or not.
//     Follwing payload must contain in the request body. Except when the token is stored in cookie.

//     Request: {
//         "createToken": "string"
//         "userId": "string"
//     }

// ```;

// import models
const { User } = require("../models/accountModel");

let auth = (req, res, next) => {
    // get token from client cookie
    // let token = req.cookies.createToken;
    // if cookie does not work send the request with the token in the body (payload)
    let token = req.body.createToken;
    let userId = req.body.userId;
    // If no token is provided, return an error response

    if (!token || !userId) {
        return res.status(401).json({
            code: "Unauthorized",
            message: "No authentication token or user ID provided.",
            isAuth: false,
        });
    }

    // decode token and find user
    User.findByToken(token)
        .then((user) => {
            if (!user || user._id.toString() !== userId)
                return res.status(400).json({
                    code: "Bad Request",
                    message: "Invalid approach",
                    isAuth: false,
                    error: true,
                });
            req.token = token;
            req.user = user;
            next();
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({
                code: "Internal Server Error",
                message: "An error occurred while authenticating.",
                isAuth: false,
            });
        });
};

module.exports = { auth };
