const mongoose = require('mongoose');
const Candidate = require("../Module/CandidateProfile.js");

const createCandidateProfile = async (req, res) => {
  try {
    const { TechStack, Experience, ExpectedCTC, Location } = req.body;

    // Validate the request body data here if necessary

    const newCandidate = new Candidate({ TechStack, Experience, ExpectedCTC, Location });

    const savedCandidate = await newCandidate.save();

    res.status(201).json({
      status: 201,
      msg: "Candidate profile created",
      data: savedCandidate
    });
  } catch (error) {
    console.error(error);

    res.status(401).json({
      status: 500,
      msg: "Error creating candidate profile",
    });
  }
};

module.exports = { createCandidateProfile };
