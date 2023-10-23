const mongoose = require("mongoose");

const selectionSchema = mongoose.Schema({
    serviceName: {
        type: String,
        trim: true,
        required: true,
    },
    provider: {
        type: String,
        trim: true,
        required: true,
    },
    // from now on everything is boolean
    freeTier: {
        type: Boolean,
        default: false,
    },
    payAsYouGo: {
        type: Boolean,
        default: false,
    },
    reservedInstance: {
        type: Boolean,
        default: false,
    },
    enterprisePricing: {
        type: Boolean,
        default: false,
    },
    linux: {
        type: Boolean,
        default: false,
    },
    windows: {
        type: Boolean,
        default: false,
    },
    macOs: {
        type: Boolean,
        default: false,
    },
    python: {
        type: Boolean,
        default: false,
    },
    java: {
        type: Boolean,
        default: false,
    },
    cSharp: {
        type: Boolean,
        default: false,
    },
    go: {
        type: Boolean,
        default: false,
    },
    javascript: {
        type: Boolean,
        default: false,
    },
    apiCompatibility: {
        type: Boolean,
        default: false,
    },
    kubernetes: {
        type: Boolean,
        default: false,
    },
    machineLearning: {
        type: Boolean,
        default: false,
    },
    databaseConnection: {
        type: Boolean,
        default: false,
    },
    securityIntegretion: {
        type: Boolean,
        default: false,
    },
    web: {
        type: Boolean,
        default: false,
    },
    database: {
        type: Boolean,
        default: false,
    },
    compute: {
        type: Boolean,
        default: false,
    },
    container: {
        type: Boolean,
        default: false,
    },
    serverless: {
        type: Boolean,
        default: false,
    },
    networking: {
        type: Boolean,
        default: false,
    },
});

const Selection = mongoose.model("Selection", selectionSchema);
module.exports = { Selection };
