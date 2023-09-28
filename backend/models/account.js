const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    surname: {
        type: String,
        maxlength: 50,
    },
    firstName: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
        required: true,
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateToken = function () {
    const user = this;
    const token = jwt.sign(user._id.toHexString(), "createToken");
    user.token = token;

    return user.save().then(() => token);
};

userSchema.statics.findByToken = function (token) {
    const user = this;

    // Decode the token
    return new Promise((resolve, reject) => {
        jwt.verify(token, "createToken", (err, decoded) => {
            if (err) return reject(err);

            // Find the user by ID and check if the token matches
            user.findOne({ _id: decoded, token: token })
                .then((user) => resolve(user))
                .catch((err) => reject(err));
        });
    });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
