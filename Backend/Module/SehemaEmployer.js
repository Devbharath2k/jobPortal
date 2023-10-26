const mongoose = require("mongoose");

const blogSchema = new Schema({
  fname: {
    typeof: "string",
    required: true
  },
  lname: {
    typeof: "string",
    required: true
  },
  email: {
    typeof: "string",
    required: true,
    unique: true
  },
  phone:{
    type:"Number",
    required: true
  },
  
  password: {
    type: "String",
    required: true
  },
  company: {
    type: "string"
  },
  salary: {
    type: "Number",
    required: true
  },

  Experience: {
    type: "string"
  }
});

export default mongoose.model("Emplpyer", blogSchema);
