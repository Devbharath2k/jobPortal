const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Candidateprofile = new Schema({
  TechStack: {
    type: "string",
    
  },
  Experience: {
    type: "string",
    
   
  },
  ExpectedCTC: {
    type: "Number",
   
    
  },
  Location: {
    type: "string",
    
  
  }
});

module.exports = mongoose.model("Candidateprofile", Candidateprofile);
