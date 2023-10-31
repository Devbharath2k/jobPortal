const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const InprogressSchema = new Schema({
 jobId:{
    type: String,
    required: true
 },
 roleName:{
    type:String,
   
 },
 candidateId:{
    type:String,
    required:true
 },
 status:{
    type: String,
    required:true
 },
 comments:{
    type:String
 },
  date: {
    type: String,
    required:true
  },
});

module.exports = mongoose.model("inProgress", InprogressSchema);  // Corrected the model name to "Employer"



