// ```
//     THis is a middleware to check whether user had previously deployed instance before.
//     If not, create new userAWS and usageHistory.
//     If yes, return the userAWS and usageHistory.
//     Following payload must contain in the request body.
//     Request: {
//         "createToken": "string"
//         "userId": "string"
//     }
// ```;

require("dotenv").config();

const { auth } = require("./auth");
const { User } = require("../models/accountModel");
const { UserAWS } = require("../models/userAWSModel");
const { UsageHistory } = require("../models/usageHistory");

// check whether user had previously deployed instance before
let dashboard = async (req, res, next) => {
    let token = req.body.createToken;
    let userId = req.body.userId;
    if (!token || !userId) {
        return res.status(401).json({
            code: "Unauthorized",
            message: "No authentication token or user ID provided.",
            isAuth: false,
        });
    }

    User.findByToken(token)
        .then(async (user) => {
            if (!user || user._id.toString() !== userId)
                return res.status(400).json({
                    code: "Bad Request",
                    message: "Invalid approach",
                    isAuth: false,
                    error: true,
                });

            let serviceUser = await UserAWS.findOne({ email: user.email });
            let usageHistory = await UsageHistory.findOne({ email: user.email });
            let dashboardId = null;
            let historyId = null;

            if (!serviceUser) {
                // create new useraws
                const provideService = new UserAWS({
                    email: user.email,
                    userId: user._id.toString(),
                });
                provideService.save();
                dashboardId = provideService._id.toString();
            } else {
                dashboardId = serviceUser._id.toString();
            }

            if (!usageHistory) {
                // create new usage history
                const history = new UsageHistory({
                    email: user.email,
                    userId: user._id.toString(),
                });
                history.save();
                historyId = history._id.toString();
            } else {
                historyId = usageHistory._id.toString();
            }

            req.historyId = historyId;
            req.dashboardId = dashboardId;

            next();
        })
        .catch((err) => {
            return res.status(500).json({
                code: "Internal Server Error",
                message: "An error occured while getting user dashboard",
            });
        });
};
module.exports = { dashboard };
