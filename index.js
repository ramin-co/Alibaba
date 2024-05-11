const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./src/routes/index");

app.use(express.json());

app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongoDb"))
  .catch(() => console.log("Can't Connected to MongoDb"));

app.listen(process.env.PORT, () =>
  console.log(`App Runing on Port ${process.env.PORT}`)
);
