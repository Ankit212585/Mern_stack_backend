const jwt = require("jsonwebtoken");
const User = require("../Model/authmodel");

const authMiddleWare = async (req, res, next) => {
  const token = req.header("Authorization");

  // Assuming token is in the format "Barears"<JWT_TOKEN> , Removing the "Bearer" prefix"
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Unauthorizes HTTP, Token is not provided" });
  }
  const JwtToken = token.replace("Bearer", "").trim();
  try {
    const isValidtoken = jwt.verify(JwtToken, process.env.JWT_TOKEN);

    console.log(isValidtoken);
    const userdata = await User.findOne({
      email: isValidtoken.email,
    });

    req.user = userdata;
    req.token = token;
    req.userId = userdata._id;
    console.log(userdata);
  } catch (err) {
    res.status(400).json("Unauthorized Invalid token");
  }
  // Assuming token is in the format "Barears"<JWT_TOKEN> , Removing the "Bearer" prefix"

  next();
};

module.exports = authMiddleWare;
