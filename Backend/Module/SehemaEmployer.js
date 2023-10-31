const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const EmployerSchema = new Schema({
  fname: {
    type: String,  
   
  },
  lname: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,  
    
  },
  password: {
    type: String,  
    
  },
  company: {
    type: String
  },
  salary: {
    type: Number,
   
  },
  experience: {
    type: String
  }
});

module.exports = mongoose.model("Employer", EmployerSchema); 
