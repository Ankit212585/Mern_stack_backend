const express = require("express");
const router = express.Router();
const admin_controller = require("../Controller/admin_controller");
const authMiddleWare = require("../middleware/auth_middleware");
const adminMiddleware = require("../middleware/admin_middleware");

router
  .route("/users")
  .get(authMiddleWare, adminMiddleware, admin_controller.allUsers);

// userDelete
router
  .route("/users/delete/:id")
  .delete(
    authMiddleWare,
    adminMiddleware,
    admin_controller.DeleteUsers
  );

router
  .route("/contacts")
  .get(authMiddleWare, adminMiddleware, admin_controller.allContact);

module.exports = router;
