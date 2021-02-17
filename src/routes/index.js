//Import Routes
const usersRoutes = require("./user");
const authRoutes = require('./auth')
const appointmentRoutes = require("./appointment");

//Module exports
module.exports = {
  usersRoutes,
  authRoutes,
  appointmentRoutes
};
