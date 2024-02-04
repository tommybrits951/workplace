const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Databases")
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
