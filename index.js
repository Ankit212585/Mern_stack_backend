const express = require("express");
const app = express();
const authRouter = require("./Router/auth");
const dotenv = require("dotenv");
const connectdb = require("./utils/db");
const contactRouter = require("./Router/contactRouter");
const errorMiddleware = require("./middleware/error_middleware");
const cors = require("cors");

// dot net logic
dotenv.config();

// our proxy file
const corsOptions = {
  origin: "http://localhost:5174",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

// our port
const Port = 5000;

// middleWare
app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

// our connection
connectdb().then(() => {
  app.listen(Port, (err) => {
    if (err) {
      console.log("server is not running");
    } else {
      console.log("server is running");
    }
  });
});
