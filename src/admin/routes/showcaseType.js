//Import dependencies
const router = require("express").Router();

//Controller
const showcaseTypeController = require("../controllers/showcaseType");

//Middleware
const showcaseTypeMiddleware = require("../middlewares/content");

//Routes
router.get("/showcaseType", showcaseTypeController.browse);
router.get("/showcaseType/:id", showcaseTypeController.read);
router.post(
  "/showcaseType",
  showcaseTypeMiddleware.add,
  showcaseTypeController.add
);

//Module exports
module.exports = router;
