
const mongoose = require('mongoose');

const Schema = require("../../Module/InProgressSchema")

const updateInprogress  =async (req,res)=>{

    try {
        // console.log("req body", req.body);
        const updatedFormData = {
            jobId: "653fa9e3f6bc89bb58baf2c5",
            candidateId:"653f4b1170c6e7dfe492904d",
            roleName:"",
            status:"L2 completed",
            comments:"jcjd jdncn",
            date:"25-10-23"
        }



        // Save updatedFormData to the database
        const savedJobDetails = await Schema.create(updatedFormData);

        // Send a response back to the client
        res.status(200).json({ message: 'Data saved successfully', savedJobDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }


}


const getEmployerStatus = async (req, res) => {
  try {

    const employerId = req.query.employerId;

    // Access the MongoDB collection directly using the mongoose connection object
    const jobDetailsCollection = mongoose.connection.collection('jobdetails'); // Replace 'jobdetails' with your actual collection name

    // Find documents based on employerId
    const jobDetailsList = await jobDetailsCollection.find({ employerId: employerId }).toArray();

    // Extract specific fields from each document
    const simplifiedJobDetailsList = jobDetailsList.map((jobDetails) => {
      return {
        role: jobDetails.roleName,
        openings: jobDetails.openings,
        remainingOpenings: jobDetails.remaining_openings,
        status: jobDetails.status,
        comments: jobDetails.comments,
      };
    });

    // Send the simplified job details list as the response
    res.status(200).json({ jobDetailsList: simplifiedJobDetailsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {updateInprogress,getEmployerStatus}