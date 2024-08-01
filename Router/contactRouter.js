const express = require("express");
const router = express();
const contactForm = require("../Controller/Contact_controller");

router.route("/").post(contactForm);

module.exports = router;
