const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Candidateprofile = new Schema({
  TechStack: {
    type: "string",
    required: true
  },
  Experience: {
    type: "string",
    required: true
  },
  ExpectedCTC: {
    type: "Number",
    required: true
  },
  Location: {
    type: "string",
    required: true
  }
});

module.exports = mongoose.model("Candidateprofile", Candidateprofile);
