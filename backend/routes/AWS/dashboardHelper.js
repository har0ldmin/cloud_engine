const express = require("express");
const router = express.Router();

const { dashboard } = require("../../middleware/dashboard-middleware");
const { UserAWS } = require("../../models/UserAWSModel");

router.post("/", dashboard, async (req, res) => {
    const serviceUser = await UserAWS.findById(req.dashboardId);
    console.log(req.dashboardId);
    return res.json({
        code: "OK",
        message: "Ready to use dashboard",
        ec2: serviceUser.ec2Instances || [],
        rds: serviceUser.rdsInstances || [],
    });
});

module.exports = router;
