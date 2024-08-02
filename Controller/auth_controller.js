// const bcrypt = require("bcryptjs");

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

    // const token = User.generateToken();

    const userCreated = await User.create({
      username,
      email,
      Phone_Number,
      password,
    });

    res.status(201).json({
      msg: "Registration successful",
      userCreated,
      // token,
      // userId: userCreated._id.toString(),
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
      res.status(201).json({
        msg: "Login successful",
      });
    } else {
      res.status(401).json("server error");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("user cannot found", err);
  }
};

module.exports = { login, register }; //remember plzz destructure this function
