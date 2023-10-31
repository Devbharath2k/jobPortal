const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
require('dotenv').config();
 const JobPortal =require("./Routes/route.js");



app.use(express.json());
app.use(cors());
app.use("/",JobPortal);


mongoose
  .connect(`mongodb+srv://admin:${process.env.password}@atlascluster.lllsis7.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is listening on port " + PORT);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
