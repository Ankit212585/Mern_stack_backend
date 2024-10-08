// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Model/authmodel");

// This is our registration logic
const register = async (req, res) => {
  try {
    const { username, email, Phone_Number, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ message: "Email Already exists" });
    }
    // hash password
    // const hash_password = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
      username,
      email,
      Phone_Number,
      password,
    });
    console.log({
      userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });

    res.status(201).json({
      msg: "Registration successful",
      userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(`user cannot found ${err}`);
  }
};

//

// This is our login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // if user doesn't exist
    const userExist = await User.findOne({ email, password });

    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    if (userExist) {
      console.log({
        userExist,
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
      res.status(201).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json("server error");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("user cannot found", err);
  }
};

// Get user data - User Logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log(`error form the user route ${err}`);
  }
};

module.exports = { login, register, user }; //remember plzz destructure this function
