const express = require("express");
const router = express.Router();

require("dotenv").config();
const { createFullUser, listAllUsers, deleteUser, issueNewAccessKey } = require("./iamHelper");

const debug = false;

router.get("/getAllUsers", async (req, res) => {
    // #swagger.tags = ['SDK - IAM']
    try {
        const users = await UserAWS.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ isError: true, message: "Error fetching users", rawErr: err });
    }
});

router.post("/getUserByEmail", async (req, res) => {
    // #swagger.tags = ['SDK - IAM']
    const { email } = req.body;
    try {
        let user = await UserAWS.find({ email: email });
        if (user.length == 0) res.status(404).json({ isError: true, message: "User not found" });
        else res.status(200).json(user);
    } catch {
        res.status(500).json({ isError: true, message: "Error fetching user", rawErr: err });
    }
});

router.post("/createUser", async (req, res) => {
    // #swagger.tags = ['SDK - IAM']
    const { email, username, rdsLink } = req.body;
    createFullUser(username)
        .then(async (data) => {
            if (data.isError) {
                res.status(400).json(data);
            } else {
                // Save to database
                const userAWS = new UserAWS({
                    email: req.body.email,
                    username: req.body.username,
                    accesskey: data.accessKey,
                    secretkey: data.secretAccessKey,
                });

                try {
                    const userInfo = await userAWS.save();
                    res.status(201).json(data);
                } catch (err) {
                    res.status(400).json({
                        isError: true,
                        message: "Failed to save to DB",
                        rawErr: err,
                    });
                }
            }
        })
        .catch((err) => {
            res.status(500).json({ isError: true, message: "Error creating user", rawErr: err });
        });
});

router.delete("/delete", async (req, res) => {
    // #swagger.tags = ['SDK - IAM']
    const { username } = req.body;

    let user = res.user[0];
    if (user == null) res.status(404).json({ isError: true, message: "User not found" });
    else {
        let accesskey = user.accesskey;
        collection.deleteOne(user, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ isError: true, message: "Failed to delete User" });
            }

            if (result.deletedCount === 0) {
                res.status(404).json({ isError: true, message: "User not found" });
            }

            deleteUser(username, accesskey)
                .then(async (data) => {
                    res.status(200).json(data);
                })
                .catch((err) => {
                    res.status(500).json({
                        isError: true,
                        message: "Error deleting user",
                        rawErr: err,
                    });
                });
        });
    }
});

router.patch("/replace", async (req, res) => {
    // #swagger.tags = ['SDK - IAM']
    const { username } = req.body;

    let user = res.user[0];
    if (user == null) res.status(404).json({ isError: true, message: "User not found" });
    else {
        let accesskey = user.accesskey;

        issueNewAccessKey(username, accesskey)
            .then(async (data) => {
                if (data.isError) {
                    res.status(400).json(data);
                } else {
                    collection.updateOne(
                        res.user[0],
                        { $set: { accesskey: data.accessKey, secretkey: data.secretAccessKey } },
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).json({ error: "Failed to update DB" });
                            } else res.status(200).json(data);
                        }
                    );
                }
            })
            .catch((err) => {
                res.status(500).json({
                    isError: true,
                    message: "Error replacing access key",
                    rawErr: err,
                });
            });
    }
});

// Middleware setup
async function getUser(req, res, next) {
    let user;
    const { username } = req.body;
    try {
        user = await UserAWS.find({ username: username });
        if (user === null)
            return res.status(404).json({ isError: true, message: "User not found" });
    } catch {
        return res.status(500).json({ isError: true, message: "Error fetching user", rawErr: err });
    }

    res.user = user;
    next();
}

module.exports = router;
