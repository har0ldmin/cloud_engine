const mongoose = require("mongoose");

const usageHistorySchema = mongoose.Schema({
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
    created: {
        type: Array,
        default: [],
    },
    terminated: {
        type: Array,
        default: [],
    },
});

const UsageHistory = mongoose.model("UsageHistory", usageHistorySchema);

module.exports = { UsageHistory };
