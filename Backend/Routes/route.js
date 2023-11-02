const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const candidate = require("../Taskcontrol/CandidateControl");
const employer = require("../Taskcontrol/EmployerControl");
const employerProfile = require("../Taskcontrol/Employer/employerProfile")
const Profile =require("../Taskcontrol/CandidateProfile.js")



router.post("/Candidatepost", candidate.Candidatepostmethod);
router.get("/candidateget", candidate.CandidategetMethod);
router.get("/candidate/:id", candidate.CandidategettingIdmethod);
router.put("/candidate/:id", candidate.Candidateputmethod);
router.delete("/candidate/:id", candidate.Candidatedeletemethod);

//Candidate Profile router
router.post("/api/candidatepost" , Profile.createCandidateProfile);
router.get('/api/candidategetting', Profile.getCandidateProfile);
router.delete("/api/candidatedelete", Profile.deleteCandidateProfile);



//employee Profile router
router.post("/employerProfilePost",employerProfile)

router.post("/employerpost", employer.EmployerPostMethod);
router.get("/employerget", employer.EmployerPostMethod);
router.get("/employer/:id", employer.EmployerPostMethod);
router.put("/employer/:id", employer.EmployerPostMethod);
router.delete("/employer/:id", employer.EmployerPostMethod);





module.exports = router;
