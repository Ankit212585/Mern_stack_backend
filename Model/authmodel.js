const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
// mongoose Schema Structure

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  Phone_Number: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// JWT Token
userSchema.methods.generateToken = async function () {
  try {
    return JWT.sign(
      {
        userId: this._id.toString(),
        Email: this.Email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
