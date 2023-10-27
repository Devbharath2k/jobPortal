import React from "react";
import { Route, Routes } from "react-router-dom";
import Employer_Status from "./Component/Employer_status";
import Employer_profile from "./Component/Employer_profile";
import Candidate_profile from "./Component/Candidate_profile";
import CandidateReg from "./Component/Register/CandidateReg";

import Login from "./Component/LoginNew/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CandidateReg" element={<CandidateReg />} /> 
      <Route path="/Candidate_profile" element={<Candidate_profile />} />
      <Route path="/employer_Status" element={<Employer_Status />} />
      <Route path="/employer_profile" element={<Employer_profile />} />
    </Routes>
  );
}

export default App;
