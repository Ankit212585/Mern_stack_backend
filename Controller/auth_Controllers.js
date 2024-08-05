// This all data is dummy data to practic myself

// const User = require("../Model/authmodel");
// const bcrypt = require("bcryptjs");

// const auth = async (req, res) => {
//   try {
//     const { username, email, phoneNumber, password, isAdmin } =
//       req.body;

//     // Check if all required fields are provided and not empty
//     if (!username || !email || !phoneNumber || !password) {
//       return res
//         .status(400)
//         .json({ message: "All fields are required" });
//     }

//     // Check if user with the same email or phone number already exists
//     const existingUser = await User.findOne({
//       $or: [{ email }, { phoneNumber }],
//     });
//     if (existingUser) {
//       return res.status(409).json({
//         message:
//           "User with this email or phone number already exists",
//       });
//     }

//     // Hash the password

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = await User.create({
//       username,
//       email,
//       phoneNumber,
//       password: hashedPassword,
//       isAdmin: isAdmin || false, // Use provided isAdmin or default to false
//     });

//     // Remove password from the response
//     const userResponse = newUser.toObject();
//     delete userResponse.password;

//     return res.status(201).json({
//       message: "User created successfully",
//       user: userResponse,
//     });
//   } catch (err) {
//     console.error(err);
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: err.message });
//   }
// };

// module.exports = auth;
