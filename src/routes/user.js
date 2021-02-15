//Import dependencies
const router = require("express").Router();

//Controller
const userController = require("../controllers/user");

//Middleware
const authMiddleware = require("../middlewares/auth");

//Routes
router.get("/users", userController.browse);
router.get("/user/:id", userController.read);
router.put("/user/:id", userController.edit);
router.delete("/user/:id", userController.delete);

//Module exports
module.exports = router;
