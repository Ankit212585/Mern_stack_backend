const mongoose = require("mongoose");

const URI =
  "mongodb+srv://ankitpanwar212585:%40Ankit@learnmongo.kvmtcu1.mongodb.net/";

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database is connected successfully");
  } catch (err) {
    console.log(err);
    console.log("Database is not connected");
  }
};

module.exports = connectdb;
