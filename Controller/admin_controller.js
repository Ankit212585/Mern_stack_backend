const User = require("../Model/authmodel");
const Contact = require("../Model/contactModel");

// admin all user
const allUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

// admin all contacts

const allContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.log("something went wrong");
  }
};
module.exports = { allUsers, allContact };
