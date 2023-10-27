import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Candidate_list from './Candidate_List';


const Employer_Status = () => {
    const [status, setStatus] = useState([
        {
            role: "Frontend-development",
            openings: 10,
            remaining_openings: 3,
            status: "open",
            comments: "still open"
        },
        {
            role: "Bankend-development",
            openings: 10,
            remaining_openings: 3,
            status: "open",
            comments: "still open"
        },
    ]);
 




                

  return (
    <div className=''>
       

    <div className="main-bg2 employer_profile d-flex justify-content-center flex-column align-items-center  h-100vh px-3 overflow-hidden">
      <div className="col-md-10 border p-4 rounded-3 opacity">
        <h2 className="py-2 text-center " style={{"font-family":" cursive"}}>Employer Status</h2>
        <div className=" text-end"><Link to={"/"} className="text-dark text-decoration-none fw-semibold">Add Jobs <i class="bi bi-arrow-right"></i></Link></div>
        <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom">

          <div className="col "><span className="">S.No</span></div>
          <div className="col"> <span>Role Name</span></div>
          <div className="col"><span>Openings</span></div>
          <div className="col"><span>Remaining openings</span></div>
          <div className="col"><span>Status</span></div>
          <div className="col"><span>Comments</span></div>
        </div>
          {/* ... your input fields ... */}
          {status.map((item, index) => (
            <div key={index} className={`row justify-content-center job pt-3 fs-6 fw-semibold`}>

              <div className="col">
                {index+1}
              </div>
              <div className="col">
                {item.role}
              </div>
              <div className="col">
                {item.openings}
              </div>
              <div className="col">
               {item.remaining_openings}
              </div>
              <div className="col">
                {item.status}
              </div>
              <div className="col">
                {item.comments}
              </div>
            </div>
          ))}
      </div>
    </div>
    <div className='candidate_list'>
                        <Candidate_list/>
    </div>
    </div>
    

  )
}

export default Employer_Status



