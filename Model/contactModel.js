const { Schema, model, default: mongoose } = require("mongoose");

const contactSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
 
  },
  messageBox: {
    type: String,
    required: true,
  },
});

// create a model

const Contact = new model("contact", contactSchema);
module.exports = Contact;
