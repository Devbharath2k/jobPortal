import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route,Routes } from "react-router-dom";
import Candidate from './Component/Candidate';
import Employer_Status from './Component/Employer_status';
import Employer_profile from './Component/Employer_profile';
import Candidate_profile from './Component/Candidate_profile';
import CandidateUpdate from "./Component/Candidate_profile"
import RegisterCandidate from "./Component/RegisterCandidate";
import RegisterEmployer from "./Component/RegisterEmployer";
import Login from "./Component/LoginNew/Login";


function App() {
  // return (
  //   <Routes>
  //       <Route path="/" element={<Login />} /> 
  //       <Route path="/RegisterCandidate" element={<RegisterCandidate />} />
  //       <Route path="/RegisterEmployer" element={<RegisterEmployer />} />


  //       <Route path='/Candidate_profile' element={<Candidate_profile/>}/>
      
  //       <Route path='/employer_Status' element={<Employer_Status/>}/>
  //       <Route path='/employer_profile' element={<Employer_profile/>}/>

  //       <Route path ="/CandidateUpdate" element ={<CandidateUpdate/>}/>  

  //   </Routes>
  // );
  const [userRole, setUserRole] = useState(null);

  // Function to set user role after successful login or registration
  const handleAuthentication = (role) => {
    setUserRole(role);
  };

  // Conditional rendering logic based on user role
  const renderRoutes = () => {
    if (userRole === 'employer') {
      return (
        <Routes>
          <Route path="/employer_Status" element={<Employer_Status />} />
          <Route path="/" element ={<Employer_profile />} />
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Routes>
      );
    } else if (userRole === 'candidate') {
      return (
        <Routes>
          <Route  path="/" element={<Candidate_profile />} />
          <Route path="*" element={<h1>Page not Found</h1>} />
          
        </Routes>
      );
    } else {

      return (
        <Routes>
          <Route path="/" element={<Login onAuthentication={handleAuthentication} />} />
          <Route path="/RegisterEmployer" element={<RegisterEmployer onAuthentication={handleAuthentication} />} />
          <Route path="/RegisterCandidate" element={<RegisterCandidate onAuthentication={handleAuthentication} />} />
        </Routes>
      );
    }
  };

  return renderRoutes();
}

export default App;
