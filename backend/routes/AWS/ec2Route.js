// ```
// A EC2 related API routes

//     EC2 API routes:
//         - create EC2 instance
//         - start EC2 instance
//         - stop EC2 instance
//         - reboot EC2 instance
//         - describe EC2 instance
//         - get all EC2 instances
//         - terminate EC2 instance

//     All routes uses dashboard middleware to check whether the user has access to the dashboard
// ```;

// import modules
const express = require("express");
const router = express.Router();

require("dotenv").config();

// import helper functions
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

// import middlewares
const { dashboard } = require("../../middleware/dashboard-middleware");

// import models
const { UserAWS } = require("../../models/userAWSModel");
const { UsageHistory } = require("../../models/usageHistory");

// check whether user had previously deployed instance before
router.post("/create", dashboard, async (req, res) => {
    try {
        // if instance name is not provided, use default name
        const InstanceName = req.body.InstanceName || "try now";

        // create EC2 instance
        createEC2Instance(InstanceName)
            .then(async (data) => {
                const instanceId = data.ec2info[0].InstanceId;
                await UserAWS.findByIdAndUpdate(
                    req.dashboardId,
                    {
                        $push: {
                            ec2Instances: {
                                instanceId: instanceId,
                                instanceName: data.ec2info[0].tagName,
                            },
                        },
                    },
                    { new: true }
                );

                // update usage history
                await UsageHistory.findByIdAndUpdate(
                    req.historyId,
                    { $push: { created: instanceId } },
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
        let instance_list = [];

        // retrieve all instance ids from ec2Instances list of dictionaries [{InstanceId: "id1"}, {InstanceId: "id2"}]
        serviceUser.ec2Instances.forEach((instance) => {
            instance_list.push(instance.instanceId);
        });
        // if instanceid not in ec2instances list of dictionaries [{instanceId: instanceid, name: name}]
        if (!instance_list.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error starting EC2 instance",
                rawErr: "Instance not found",
            });
        }

        // start EC2 instance
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
        let instance_list = [];
        // retrieve all instance ids from ec2Instances list of dictionaries [{InstanceId: "id1"}, {InstanceId: "id2"}]
        serviceUser.ec2Instances.forEach((instance) => {
            instance_list.push(instance.instanceId);
        });
        // if instanceid not in ec2instances list of dictionaries [{instanceId: instanceid, name: name}]
        if (!instance_list.includes(InstanceId)) {
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
        let instance_list = [];
        // retrieve all instance ids from ec2Instances list of dictionaries [{InstanceId: "id1"}, {InstanceId: "id2"}]
        serviceUser.ec2Instances.forEach((instance) => {
            instance_list.push(instance.instanceId);
        });
        // if instanceid not in ec2instances list of dictionaries [{instanceId: instanceid, name: name}]
        if (!instance_list.includes(InstanceId)) {
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
        let instance_list = [];
        // retrieve all instance ids from ec2Instances list of dictionaries [{InstanceId: "id1"}, {InstanceId: "id2"}]
        serviceUser.ec2Instances.forEach((instance) => {
            instance_list.push(instance.instanceId);
        });
        // if instanceid not in ec2instances list of dictionaries [{instanceId: instanceid, name: name}]
        if (!instance_list.includes(InstanceId)) {
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
            let instance_list = [];
            // retrieve all instance ids from ec2Instances list of dictionaries [{InstanceId: "id1"}, {InstanceId: "id2"}]
            serviceUser.ec2Instances.forEach((instance) => {
                instance_list.push(instance.instanceId);
            });

            getAllEC2Instances(instance_list)
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
        let instance_list = [];

        // retrieve all instance ids from ec2Instances list of dictionaries [{InstanceId: "id1"}, {InstanceId: "id2"}]
        serviceUser.ec2Instances.forEach((instance) => {
            instance_list.push(instance.instanceId);
        });

        // if instanceid not in ec2instances list of dictionaries [{instanceId: instanceid, name: name}]

        if (!instance_list.includes(InstanceId)) {
            return res.status(500).json({
                isError: true,
                message: "Error terminating EC2 instance",
                rawErr: "Instance not found",
            });
        }

        terminateEC2Instance(InstanceId)
            .then(async (data) => {
                // delete instanceid from ec2instances list of dictionaries [{instanceId: instanceid, name: name}]
                serviceUser.ec2Instances = serviceUser.ec2Instances.filter(
                    (instance) => instance.instanceId != InstanceId
                );
                serviceUser.save();
                await UsageHistory.findByIdAndUpdate(
                    req.historyId,
                    { $push: { terminated: InstanceId } },
                    { new: true }
                );
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
