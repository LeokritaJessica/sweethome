//Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

//Import route
const routes = require("./routes");
const adminRoutes = require("./admin/routes");

//Import Database
const db = require("./config/database");

//Express
const app = express();

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Morgan
app.use(morgan("dev"));

//Cors
app.use(cors());

//ROUTE
//Admin
app.use("/api/v1/admin", adminRoutes.adminRoutes);
app.use("/api/v1/admin", adminRoutes.styleRoutes);
app.use("/api/v1/admin", adminRoutes.buildTypeRoutes);
app.use("/api/v1/admin", adminRoutes.locationRoutes);
app.use("/api/v1/admin", adminRoutes.projectTypeRoutes);
app.use("/api/v1/admin", adminRoutes.serviceTypeRoutes);
app.use("/api/v1/admin", adminRoutes.showcaseTypeRoutes);
app.use("/api/v1/admin", adminRoutes.timeslotRoutes);
app.use("/api/v1/admin", adminRoutes.customerRoutes);
app.use("/api/v1/admin", adminRoutes.appointmentRoutes);

//User
app.use("/api/v1", routes.usersRoutes);
app.use("/api/v1", routes.authRoutes);
app.use("/api/v1", routes.appointmentRoutes);

//Module Exports
module.exports = app;
