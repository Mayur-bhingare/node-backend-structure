require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const MainRoute = require("./routes/main.route");
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", MainRoute);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DataBase Connected -------");
    server.listen(process.env.PORT, () => {
      console.log("server is running on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
