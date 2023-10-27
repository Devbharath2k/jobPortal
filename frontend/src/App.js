import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/LoginNew/Login";
import EmployerStatus from './Component/Employer_status'; // PascalCase
import EmployerProfile from './Component/Employer_profile'; // PascalCase
import CandidateProfile from './Component/Candidate_profile'; // PascalCase
import EmployerReg from "./Component/Register/EmployerReg";
import CandidateReg from "./Component/Register/CandidateReg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CandidateReg" element={<CandidateReg />} />
      <Route path="/Candidate_profile" element={<CandidateProfile />} />
      <Route path="/employer_Status" element={<EmployerStatus />} />
      <Route path="/employer_profile" element={<EmployerProfile />} />
      <Route path="/EmployerReg" element={<EmployerReg />} />
    </Routes>
  );
}

export default App;