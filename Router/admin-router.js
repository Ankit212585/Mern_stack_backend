const express = require("express");
const router = express.Router();
const admin_controller = require("../Controller/admin_controller");
const authMiddleWare = require("../middleware/auth_middleware");
const adminMiddleware = require("../middleware/admin_middleware");

// userGet route
router
  .route("/users")
  .get(authMiddleWare, adminMiddleware, admin_controller.allUsers);

// userDelete route
router
  .route("/users/delete/:id")
  .delete(
    authMiddleWare,
    adminMiddleware,
    admin_controller.DeleteUsers
  );

// Getcontact route
router
  .route("/contacts")
  .get(authMiddleWare, adminMiddleware, admin_controller.allContact);

// Edit contect Route

router
  .route("/edit/:id")
  .patch(
    authMiddleWare,
    adminMiddleware,
    admin_controller.getUserbyId
  );

// contact delete route

router
  .route("/contacts/delete/:id")
  .delete(
    authMiddleWare,
    adminMiddleware,
    admin_controller.deleteContact
  );
module.exports = router;
