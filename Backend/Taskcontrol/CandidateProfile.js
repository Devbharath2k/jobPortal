const mongoose = require("mongoose");
const CandidateProfile = require("../Module/CandidateProfile.js");

const createCandidateProfile = async (req, res) => {
  try {
    const { TechStack, Experience, ExpectedCTC, Location } = req.body;

    // Validate the request body data here if necessary

    const newCandidate = new CandidateProfile({
      TechStack,
      Experience,
      ExpectedCTC,
      Location
    });

    const savedCandidate = await newCandidate.save();

    res.status(201).json({
      status: 201,
      msg: "Candidate profile created",
      data: savedCandidate
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: 500,
      msg: "Error creating candidate profile"
    });
  }
};

// profile page getting Data method:

const getCandidateProfile = async (req, res) => {
  try {
    const users = await CandidateProfile.find({});

    res.status(200).json({
      message: "successfully retrieved",
      data: users
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: 500,
      msg: "Error retrieving candidate profiles"
    });
  }
};

// Delete Method

const deleteCandidateProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await CandidateProfile.findByIdAndDelete(id);

    if (user) {
      res.status(200).json({
        message: "Delete Successfully",
        data: user
      });
    } else {
      res.status(404).json({
        message: "Profile not found"
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting candidate profile" });
  }
};

module.exports = {
  createCandidateProfile,
  getCandidateProfile,
  deleteCandidateProfile
};
