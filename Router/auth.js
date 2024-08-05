const express = require("express");
const router = express.Router();
const auth_controller = require("../Controller/auth_controller");
const authMiddleWare = require("../middleware/auth_middleware");
// const signupSchema = require("../validators/auth_validators");
// const validate_middleware = require("../middleware/validate_middleware");

// This is our user routes
router.route("/register").post(auth_controller.register);
router.route("/login").post(auth_controller.login);
router.route("/get").get(authMiddleWare, auth_controller.user);

module.exports = router;
