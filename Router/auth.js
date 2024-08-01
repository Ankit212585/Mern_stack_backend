const express = require("express");
const router = express.Router();
const auth_controller = require("../Controller/auth_controller");
// const signupSchema = require("../validators/auth_validators");
// const validate = require("../middleware/validate_middleware");

router.route("/register").post(auth_controller.register);
router.route("/login").post(auth_controller.login);

module.exports = router;
