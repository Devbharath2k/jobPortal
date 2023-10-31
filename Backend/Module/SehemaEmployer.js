const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const EmployerSchema = new Schema({
  fname: {
    type: String,  
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,  
    required: true
  },
  password: {
    type: String,  
    required: true
  },
  company: {
    type: String
  }
});

module.exports = mongoose.model("Employer", EmployerSchema);  // Corrected the model name to "Employer"
