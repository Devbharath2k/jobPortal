const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const JobDetailsSchema = new Schema({
 employerId:{
    type: Number,
    required: true
 },
 roleName:{
    type:String,
    required:true
 },
 openings:{
    type:Number,
    required:true
 },
 noticePeriod:{
    type: String
 },
 location:{
    type:String
 },
  company: {
    type: String,
    required:true
  },
  budget: {
    type: String,
  
  },
  experience: {
    type: String
  }
});

module.exports = mongoose.model("JobDetails", JobDetailsSchema);  // Corrected the model name to "Employer"
