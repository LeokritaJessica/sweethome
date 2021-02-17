//Import dependencies
const router = require("express").Router();

//Controller
const appointmentController = require("../controllers/appointment");

//Middleware

//Routes
router.get("/appointment", appointmentController.browse);
router.get("/appointment/:id", appointmentController.read);
// router.get("/appointment", appointmentController.sort);
router.put("/appointment/:id/status", appointmentController.status);


//Module exports
module.exports = router;
