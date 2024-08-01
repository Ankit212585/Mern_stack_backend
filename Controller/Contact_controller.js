const Contact = require("../Model/contactModel");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    const contactData = await Contact.create(response);
    return res
      .status(200)
      .json({ message: "message sand successfully", contactData });
  } catch (err) {
    console.log(err);
  }
};

module.exports = contactForm;
