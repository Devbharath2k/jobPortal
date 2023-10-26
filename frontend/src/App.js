import React from "react";

import { Route, Routes } from "react-router-dom";
import Candidate from "./Component/Candidate";
import Employer_Status from "./Component/Employer_status";
import Employer_profile from "./Component/Employer_profile";
import Candidate_profile from "./Component/Candidate_profile";
import RegisterCandidate from "./Component/RegisterCandidate";
import RegisterEmployer from "./Component/RegisterEmployer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Candidate />} />
      <Route path="/Candidate_profile" element={<Candidate_profile />} />
      <Route path="/employer_Status" element={<Employer_Status />} />
      <Route path="/employer_profile" element={<Employer_profile />} />
      <Route path="/RegisterCandidate" element={<RegisterCandidate />} />
      <Route path="/RegisterEmployer" element={<RegisterEmployer />} />
    </Routes>
  );
}

export default App;
