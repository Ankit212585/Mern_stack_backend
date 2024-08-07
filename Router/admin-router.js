const express = require("express");
const router = express.Router();
const admin_controller = require("../Controller/admin_controller");
const authMiddleWare = require("../middleware/auth_middleware");

router.route("/users").get(authMiddleWare, admin_controller.allUsers);
router
  .route("/contacts")
  .get(authMiddleWare, admin_controller.allContact);

module.exports = router;
