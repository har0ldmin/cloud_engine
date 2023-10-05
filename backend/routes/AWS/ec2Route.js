const express = require("express");
const router = express.Router();

require("dotenv").config();
const {
    createEC2Instance,
    startEC2Instance,
    stopEC2Instance,
    rebootEC2Instance,
    describeEC2Instance,
    getAllEC2Instances,
    terminateEC2Instance,
} = require("./ec2Helper");

const debug = false;

const { dashboard } = require("../../middleware/dashboard-middleware");
const { UserAWS } = require("../../models/UserAWSModel");

// check whether user had previously deployed instance before

router.post("/create", dashboard, async (req, res) => {
    try {
        const InstanceName = req.body.InstanceName || "try now";

        createEC2Instance(InstanceName)
            .then(async (data) => {
                const instanceId = data.ec2info[0].InstanceId;
                await UserAWS.findByIdAndUpdate(
                    req.dashboardId,
                    { $push: { ec2Instances: instanceId } },
                    { new: true }
                );

                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error creating EC2 instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error creating EC2 instance",
            rawErr: err,
        });
    }
});

router.post("/start", dashboard, async (req, res) => {
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(500).json({
                isError: true,
                message: "Error starting EC2 instance",
                rawErr: "User not found",
            });
        }

        const InstanceId = req.body.InstanceId;
        if (!serviceUser.ec2Instances.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error starting EC2 instance",
                rawErr: "Instance not found",
            });
        }

        startEC2Instance(InstanceId).then((data) => {
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error starting EC2 instance",
            rawErr: err,
        });
    }
});

router.post("/stop", dashboard, async (req, res) => {
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(500).json({
                isError: true,
                message: "Error stopping EC2 instance",
                rawErr: "User not found",
            });
        }

        const InstanceId = req.body.InstanceId;
        if (!serviceUser.ec2Instances.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error stopping EC2 instance",
                rawErr: "Instance not found",
            });
        }

        stopEC2Instance(InstanceId).then((data) => {
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error stopping EC2 instance",
            rawErr: err,
        });
    }
});

router.post("/reboot", dashboard, async (req, res) => {
    try {
        const userService = await UserAWS.findById(req.dashboardId);
        if (!userService) {
            return res.status(500).json({
                isError: true,
                message: "Error rebooting EC2 instance",
                rawErr: "User not found",
            });
        }

        const InstanceId = req.body.InstanceId;
        if (!userService.ec2Instances.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error rebooting EC2 instance",
                rawErr: "Instance not found",
            });
        }

        rebootEC2Instance(InstanceId).then((data) => {
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error rebooting EC2 instance",
            rawErr: err,
        });
    }
});

router.post("/describe", dashboard, async (req, res) => {
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(500).json({
                isError: true,
                message: "Error describing EC2 instance",
                rawErr: "User not found",
            });
        }

        const InstanceId = req.body.InstanceId;
        if (!serviceUser.ec2Instances.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error describing EC2 instance",
                rawErr: "Instance not found",
            });
        }
        describeEC2Instance(InstanceId)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error describing EC2 instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error describing EC2 instance",
            rawErr: err,
        });
    }
});

router.post("/getAllEC2Instances", dashboard, async (req, res) => {
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(500).json({
                isError: true,
                message: "Error getting EC2 instances",
                rawErr: "User not found",
            });
        }

        if (serviceUser.ec2Instances.length == 0)
            return res.status(200).json({
                isError: false,
                message: "No EC2 instances found",
                data: [],
            });
        else {
            getAllEC2Instances(serviceUser.ec2Instances)
                .then((data) => {
                    res.status(200).json({
                        isError: false,
                        message: "EC2 instances found",
                        data: data,
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        isError: true,
                        message: "Error getting EC2 instances",
                        rawErr: err,
                    });
                });
        }
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error getting EC2 instances",
            rawErr: err,
        });
    }
});

router.post("/terminate", dashboard, async (req, res) => {
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        const InstanceId = req.body.InstanceId;

        if (!serviceUser) {
            return res.status(500).json({
                isError: true,
                message: "Error terminating EC2 instance",
                rawErr: "User not found",
            });
        }

        // if instanceid not in ec2instances
        if (!serviceUser.ec2Instances.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error terminating EC2 instance",
                rawErr: "InstanceId not found",
            });
        }
        terminateEC2Instance(InstanceId)
            .then(async (data) => {
                // delete instanceid from ec2instances list
                serviceUser.ec2Instances = serviceUser.ec2Instances.filter(
                    (id) => id != InstanceId
                );
                console.log(serviceUser.ec2Instances);
                serviceUser.save();
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error terminating EC2 instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error terminating EC2 instance",
            rawErr: err,
        });
    }
});

module.exports = router;
