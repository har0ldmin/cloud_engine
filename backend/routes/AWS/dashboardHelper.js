// ```
// A dash board helper API
// Returns the list of EC2 and RDS instances own by the user -- this is for dashboard rendering purpose
// Returns the list of created and terminated instances -- this is for logging purpose
// ```;
// import modules
const express = require("express");
const router = express.Router();

// import middlewares
const { dashboard } = require("../../middleware/dashboard-middleware");

// import models
const { UserAWS } = require("../../models/userAWSModel");
const { UsageHistory } = require("../../models/usageHistory");

router.post("/", dashboard, async (req, res) => {
    // check whether the user has access to the dashboard
    const serviceUser = await UserAWS.findById(req.dashboardId);
    const usageHistory = await UsageHistory.findById(req.historyId);
    return res.json({
        code: "OK",
        message: "Ready to use dashboard",
        ec2: serviceUser.ec2Instances || [],
        rds: serviceUser.rdsInstances || [],
        created: usageHistory.created || [],
        terminated: usageHistory.terminated || [],
    });
});

module.exports = router;
