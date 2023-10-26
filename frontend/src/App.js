import React from 'react'
import { Route,Routes } from "react-router-dom";
import Candidate from './Component/Candidate';
import Employer_Status from './Component/Employer_status';
import Employer_profile from './Component/Employer_profile';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Candidate/>}/>
        
        <Route path='/Employer_Status' element={<Employer_Status/>}/>
        <Route path='/employer_profile' element={<Employer_profile/>}/>
    </Routes>

  )
}

export default App