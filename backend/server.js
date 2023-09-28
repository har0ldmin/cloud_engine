const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectMongoDB = require("./config/db.js");

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Swagger Routes
const swaggerFile = require("./middleware/swagger-output.json");
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

// Connect to MongoDB
connectMongoDB();

// Link Routes
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const authRoutes = require("./routes/auth");
const logoutRoutes = require("./routes/logout");
const otpRoutes = require("./routes/otp");
const validatedOtpRoutes = require("./routes/validate_otp");
const serviceRoutes = require("./routes/services/service");
const profileRoutes = require("./routes/profile");
const forgotPasswordRoutes = require("./routes/forgot_password");
const resetPasswordRoutes = require("./routes/reset_password");
const ec2Routes = require("./routes/AWS/ec2Route");
const rdsRoutes = require("./routes/AWS/rdsRoute");
const iamRoutes = require("./routes/AWS/iamRoute");
const dashboardRoutes = require("./routes/AWS/dashboardHelper");

// Route Definitions
app.use("/api/sdk/iam", iamRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/validate_otp", validatedOtpRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/forgot_password", forgotPasswordRoutes);
app.use("/api/reset_password", resetPasswordRoutes);
app.use("/api/sdk/ec2", ec2Routes);
app.use("/api/sdk/rds", rdsRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
