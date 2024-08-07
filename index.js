const express = require("express");
const app = express();
const authRouter = require("./Router/auth");
const dotenv = require("dotenv");
const connectdb = require("./utils/db");
const contactRouter = require("./Router/contactRouter");
const serviceRouter = require("./Router/service_router");
const adminRouter = require("./Router/admin-router");
const cors = require("cors");

// dot net logic
dotenv.config();

// our proxy file
const corsOptions = {
  origin: "http://localhost:5173",
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
app.use("/api/service", serviceRouter);

// Admin route
app.use("/admin", adminRouter);

// app.use(errorMiddleware);

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
