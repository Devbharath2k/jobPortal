const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
 const JobPortal =require("./Routes/route.js");



app.use(express.json());
app.use(cors());
app.use(JobPortal);


mongoose
  .connect("mongodb://127.0.0.1:27017/JobPortal", {
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
