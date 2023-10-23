// ```
//     this route is used to get access to the services selection and recommendation data

//     the route accepts a query parameter called 'filter' which is used to filter the results
//     the filter parameter is a JSON string that is URI encoded
//     POST: /services?filter={URL_ENCODED_JSON_STRING}
//     Description: Get services
//     Request: {}
//     Response: {
//         "Services": "Array of services",
//     }
// ```;

// import modules
const express = require("express");
const router = express.Router();

// import models
const { Selection } = require("../../models/selectionModel");

router.post("/", async (req, res) => {
    try {
        const page = Number(req.query.page) || 1; // get page number from query params or default to 1
        const limit = 20; // limit number of results per page
        const skip = (page - 1) * limit; // calculate number of results to skip
        let filter = {}; // default filter to empty object
        if (req.query.filter) {
            try {
                // parse filter from query params
                filter = JSON.parse(decodeURIComponent(req.query.filter));
            } catch (err) {
                return res.status(400).json({ message: "Invalid 'filter' query parameter" });
            }
        }
        // get total number of documents in the Selection collection that match the filter
        const services = await Selection.find(filter).skip(skip).limit(limit);
        res.json(services);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
