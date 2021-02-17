//Import dependencies
const router = require("express").Router();

//Controller
const appointmentController = require("../controllers/appointment");

//Middleware
// const authMiddleware = require("../middlewares/auth");

//Routes

router.post("/appointment", appointmentController.add);


//Module exports
module.exports = router;
