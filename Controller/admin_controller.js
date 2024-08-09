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

// Delete Users

const DeleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json("User Delete successfully");
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

// Edit ourUser

const getUserbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const updateUser = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );
    console.log(updateUser);
    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
  }
};

// Delete admin contacts
const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    res.status(200).json("Contact Delete successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  allUsers,
  allContact,
  DeleteUsers,
  deleteContact,
  getUserbyId,
};
