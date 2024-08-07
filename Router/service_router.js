const express = require("express");
const ServiceController = require("../Controller/service_controller");

const router = express.Router();

router.route("/").get(ServiceController);

module.exports = router;
