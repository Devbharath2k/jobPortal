const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const {
  Candidatepostmethod,
  CandidategetMethod,
  CandidategettingIdmethod,
  Candidateputmethod,
  Candidatedeletemethod
} = require("../Taskcontrol/CandidateControl.js");

const {
  EmployerPostMethod,
  EmployergetMethod,
  EmployergettingID,
  EmployerPutMethod,
  EmployerdeleteMethod
} = require("../Taskcontrol/EmployerControl.js");

router.post("/post/employer", EmployerPostMethod);
router.get("/get/employer", EmployergetMethod);
router.get("/employer/:id", EmployergettingID);
router.put("/employer/:id", EmployerPutMethod);
router.delete("/employer/:id", EmployerdeleteMethod);

router.post("/post/candidate", Candidatepostmethod);
router.get("/get/candidate", CandidategetMethod);
router.get("/candidate/:id", CandidategettingIdmethod);
router.put("/candidate/:id", Candidateputmethod);
router.delete("/candidate/:id", Candidatedeletemethod);

module.exports = router;
