import React from "react";


import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route,Routes } from "react-router-dom";

import Employer_Status from './Component/Employer_status';
import Employer_profile from './Component/Employer_profile';
import Candidate_profile from './Component/Candidate_profile';
// import CandidateUpdate from "./Component/Candidate_profile"
import RegisterCandidate from "./Component/RegisterCandidate";
// import RegisterEmployer from "./Component/RegisterEmployer";
import Employer from "./Component/employer";
import Candidate from "./Component/candidate.jsx"
import Login from "./Component/LoginNew/Login";
import EmployerStatus from './Component/Employer_status'; // PascalCase
import EmployerProfile from './Component/Employer_profile'; // PascalCase
import EmployerReg from "./Component/Register/EmployerReg";
import CandidateReg from "./Component/Register/CandidateReg";

function App() {


  const [userRole, setUserRole] = useState(null);

  const handleAuthentication = (role) => {
    setUserRole(role);
  };

  const renderRoutes = () => {
    if (userRole === 'employer') {
      return (
        <Routes>
          <Route path="/" element={< Employer onAuthentication={handleAuthentication}/>} >
                 <Route index path="/" element ={<Employer_profile />} />
                 <Route  path="/employer_Status" element ={<Employer_Status />} />
          </Route>         
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Routes>
      );
    } else if (userRole === 'candidate') {
      return (
        <Routes>
          <Route  path="/" element={<Candidate onAuthentication={handleAuthentication}/>} >
               <Route index path="/" element={<Candidate_profile />} />
               <Route  path="/Candidate_profile" element={<Candidate_profile />} />
          </Route>        
          <Route path="*" element={<h1>Page not Found</h1>} />        
        </Routes>
      );
    } else {

      return (
        <Routes>
          <Route path="/" element={<Login onAuthentication={handleAuthentication} />} />
          {/* <Route path="/RegisterEmployer" element={<RegisterEmployer onAuthentication={handleAuthentication} />} /> */}
          <Route path="/RegisterCandidate" element={<RegisterCandidate onAuthentication={handleAuthentication} />} />
        </Routes>
      );
    }
  };

  return renderRoutes();

}

export default App;