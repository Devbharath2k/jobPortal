const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  fname: {
    type: String,  // Corrected "typeof" to "type" and "string" to String
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
    type: Number,  // Corrected "typeof" to "type" and "Number" to Number
    required: true
  },
  password: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  salary: {
    type: Number,

  },
  Experience: {
    type: String
  }
 
});

module.exports = mongoose.model("Candidate", CandidateSchema);
