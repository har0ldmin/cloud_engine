const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    provider: {
        type: String,
        trim: true,
        required: true,
    },
    services: {
        type: String,
        trim: true,
        required: true,
    },
    pricingOptions: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
    },
    compute: {
        type: Boolean,
        default: false,
    },
    container: {
        type: Boolean,
        default: false,
    },
    database: {
        type: Boolean,
        default: false,
    },
    serverless: {
        type: Boolean,
        default: false,
    },
    link: {
        type: String,
    },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = { Service };
