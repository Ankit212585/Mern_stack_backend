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
userSchema.method.generateToken = async function () {
  try {
    return JWT.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_TOKEN,
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
