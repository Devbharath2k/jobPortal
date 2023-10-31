const mongoose = require('mongoose');
const Candidate = require("../Module/CandidateProfile.js");


const Candidateprofile = async (req, res) => {
    const {TechStack,Experience,ExpectedCTC,Location } = req.body;
  
    try {
      const task = await Candidate.create({ TechStack, Experience, ExpectedCTC, Location,  });
  
      res.status(200).json({
        status: 200,
        msg: "Created task",
        data: task
      });
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        status: 500,
        msg: "Error creating task"
      });
    }
  };

  module.exports ={Candidateprofile}


