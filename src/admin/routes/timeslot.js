//Import dependencies
const router = require("express").Router();

//Controller
const timeslotController = require("../controllers/timeslot");

//Middleware
const timeslotMiddleware = require("../middlewares/timeslot");

//Routes
router.get("/serviceType/:serviceTypeId/timeslot", timeslotController.browse);
router.post(
  "/serviceType/:serviceTypeId/timeslot",
  timeslotMiddleware.add,
  timeslotController.add
);
router.put(
  "/serviceType/:serviceTypeId/timeslot/:id",
  timeslotMiddleware.edit,
  timeslotController.edit
);
router.delete("/serviceType/:serviceTypeId/timeslot/:id", timeslotController.delete);

//Module exports
module.exports = router;
