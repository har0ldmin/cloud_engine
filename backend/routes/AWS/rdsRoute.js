const express = require("express");
const router = express.Router();

require("dotenv").config();
const {
    createRDSInstance,
    deleteRDSInstance,
    infoRDSInstance,
    shutdownRDSInstance,
    poweronRDSInstance,
    rebootRDSInstance,
} = require("./rdsHelper");

const debug = false;

const { dashboard } = require("../../middleware/dashboard-middleware");
const { UserAWS } = require("../../models/UserAWSModel");

// Routes (RDS)
// router.get("/getAllRDSInstances", async (req, res) => {
//     // #swagger.tags = ['SDK - RDS']
//     try {
//         infoRDSInstance()
//             .then((data) => {
//                 if (data.rdsinfo.length == 0)
//                     res.status(404).json({
//                         isError: true,
//                         message: "No Available Instances",
//                         rawErr: data,
//                     });
//                 else res.status(200).json(data);
//             })
//             .catch((err) => {
//                 res.status(500).json({
//                     isError: true,
//                     message: "Error fetching RDS instances",
//                     rawErr: err,
//                 });
//             });
//     } catch (err) {
//         res.status(500).json({
//             isError: true,
//             message: "Error fetching RDS instances",
//             rawErr: err,
//         });
//     }
// });

router.post("/getRDSInstance", dashboard, async (req, res) => {
    // #swagger.tags = ['SDK - RDS']
    const { dbName } = req.body;

    const serviceUser = await UserAWS.findById(req.dashboardId);
    if (!serviceUser) {
        return res.status(404).json({
            isError: true,
            message: "User not found",
        });
    }

    if (!serviceUser.rdsInstances.includes(dbName)) {
        return res.status(404).json({
            isError: true,
            message: "No such instance found",
        });
    }

    infoRDSInstance(dbName)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            if (err.message == "No such instance found")
                res.status(404).json({
                    isError: true,
                    message: "No such instance found",
                    rawErr: err,
                });
            else
                res.status(500).json({
                    isError: true,
                    message: "Error fetching RDS instance",
                    rawErr: err,
                });
        });
});

router.post("/create", dashboard, async (req, res) => {
    // #swagger.tags = ['SDK - RDS']
    try {
        const { dbName, dbUsername, dbPassword } = req.body;
        createRDSInstance(dbName, dbUsername, dbPassword)
            .then(async (data) => {
                const identifier = data.rdsinfo[0].Identifier;
                await UserAWS.findByIdAndUpdate(
                    req.dashboardId,
                    { $push: { rdsInstances: identifier } },
                    { new: true }
                );
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error creating RDS instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error creating RDS instance",
            rawErr: err,
        });
    }
});

router.delete("/delete", dashboard, async (req, res) => {
    // #swagger.tags = ['SDK - RDS']
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);

        if (!serviceUser) {
            return res.status(404).json({
                isError: true,
                message: "User not found",
            });
        }

        const { dbName } = req.body;
        if (!serviceUser.rdsInstances.includes(dbName)) {
            return res.status(404).json({
                isError: true,
                message: "No such instance found",
            });
        }

        deleteRDSInstance(dbName)
            .then((data) => {
                serviceUser.rdsInstances = serviceUser.rdsInstances.filter(
                    (instance) => instance != dbName
                );
                serviceUser.save();
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error deleting RDS instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error deleting RDS instance",
            rawErr: err,
        });
    }
});

router.post("/shutdown", async (req, res) => {
    // #swagger.tags = ['SDK - RDS']
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(404).json({
                isError: true,
                message: "User not found",
            });
        }

        const { dbName } = req.body;
        if (!serviceUser.rdsInstances.includes(dbName)) {
            return res.status(404).json({
                isError: true,
                message: "No such instance found",
            });
        }

        shutdownRDSInstance(dbName)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error while shutting down the RDS instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error while shutting down the RDS instance",
            rawErr: err,
        });
    }
});

router.post("/poweron", async (req, res) => {
    // #swagger.tags = ['SDK - RDS']
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(404).json({
                isError: true,
                message: "User not found",
            });
        }

        const { dbName } = req.body;
        if (!serviceUser.rdsInstances.includes(dbName)) {
            return res.status(404).json({
                isError: true,
                message: "No such instance found",
            });
        }

        poweronRDSInstance(dbName)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error while starting RDS instance up",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error while starting RDS instance up",
            rawErr: err,
        });
    }
});

router.post("/reboot", async (req, res) => {
    // #swagger.tags = ['SDK - RDS']
    try {
        const serviceUser = await UserAWS.findById(req.dashboardId);
        if (!serviceUser) {
            return res.status(404).json({
                isError: true,
                message: "User not found",
            });
        }

        const { dbName } = req.body;
        if (!serviceUser.rdsInstances.includes(dbName)) {
            return res.status(404).json({
                isError: true,
                message: "No such instance found",
            });
        }

        rebootRDSInstance(dbName)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error while rebooting RDS instance",
                    rawErr: err,
                });
            });
    } catch (err) {
        res.status(500).json({
            isError: true,
            message: "Error while rebooting RDS instance",
            rawErr: err,
        });
    }
});

module.exports = router;
