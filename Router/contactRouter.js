const express = require("express");
const router = express();
const contactForm = require("../Controller/Contact_controller");

router.route("/Contactpage").post(contactForm);

module.exports = router;
