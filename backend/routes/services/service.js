const express = require("express");
const router = express.Router();

const { Service } = require("../../models/servicesModel");

router.get("/", async (req, res) => {
    const page = Number(req.query.page) || 1; // get page number from query params or default to 1
    const limit = 20;
    const skip = (page - 1) * limit;
    // let sort = req.query.sort || 'name';
    let filter = {};
    if (req.query.filter) {
        try {
            filter = JSON.parse(decodeURIComponent(req.query.filter));
        } catch (err) {
            return res.status(400).json({ message: "Invalid 'filter' query parameter" });
        }
    }

    try {
        const services = await Service.find(filter).skip(skip).limit(limit);
        res.json(services);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
