const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  fname: {
    type: String,  // Corrected "typeof" to "type" and "string" to String
   
  },
  lname: {
    type: String,
   
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: Number,  // Corrected "typeof" to "type" and "Number" to Number
    
  },
  password: {
    type: String,
   
  },
  company: {
    type: String
  },
  
});

module.exports = mongoose.model("Candidate", CandidateSchema);
