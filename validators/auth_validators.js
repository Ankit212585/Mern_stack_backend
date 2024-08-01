const { z } = require("zod");

// creating a zod Schema

const signupSchema = z.object(
  {
    username: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(3, { message: "Name must be 3 characters" })
      .max(300, { message: "Name must more than 255 characters" }),
  },
  {
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .min(3, { message: "Name must be 3 characters" })
      .max(1024, { message: "Name must more than 255 characters" }),
  },
  {
    password: z.string({ required_error: "password is required" }),
  },
  {
    Phone_Number: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(10, { message: "Number must be 10 characters" })
      .max(10, { message: "Number must be 10 characters " }),
  }
);

module.exports = signupSchema;
