const mongoose = require("mongoose");

const userAwsSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: 1,
        required: true,
    },
    userId: {
        type: String,
        trim: true,
        unique: 1,
        required: true,
    },
    accesskey: {
        type: String,
    },
    secretkey: {
        type: String,
    },
    ec2Instances: {
        type: Array,
        default: [],
    },
    rdsInstances: {
        type: Array,
        default: [],
    },
});

const UserAWS = mongoose.model("UserAWS", userAwsSchema);

module.exports = { UserAWS };
