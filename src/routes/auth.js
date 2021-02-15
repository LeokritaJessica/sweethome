//Import dependencies
const router = require("express").Router();

//Controller
const authController = require("../controllers/auth");

//Middleware
const authMiddleware = require("../middlewares/auth");

//Routes
router.post(
  "/register",
  authMiddleware.validateRegister,
  authController.register
);
router.post("/login", authMiddleware.validateLogin, authController.login);
router.get("/logout", authController.logout);
// router.get("/google");

//Module exports
module.exports = router;
