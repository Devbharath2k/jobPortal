import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Candiate_status () {
    const [status, setStatus] = useState([
        {role:"Frontend-development",
        company_name: "Axess_tech",
        status:"open",
        },
        {role:"Bankend-development",
        company_name: "Axess_tech",
        status:"open",
        },
    ]);
 




  return (
    <div className=''>
        {/* <div className="container-fluid">
        <p className="display-6 text-center">Employer status</p>
        <div className='row'>
            <div className=''>
            <div className="d-flex justify-content-end">
            
                <Link to={"/"}>
                <button className="btn btn-danger ">
                
                Add jobs</button>
                </Link>
        </div>
        <table className="table  table-striped justify-content-center text-center">
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Role Name</th>
                    <th scope="col">Openings</th>
                    <th scope="col">Remaining openings</th>
                    <th scope="col">Status</th>
                    <th scope="col">Comments</th>
                </tr>
            </thead>
            <tbody>
            {status.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.role}</td>
                                <td>{item.openings}</td>
                                <td>{item.remaining_openings}</td>
                                <td>{item.status}</td>
                                <td>{item.comments}</td>
                            </tr>
                        ))}
            </tbody>
        </table>
            </div>


        </div>
        
    </div> */}

    <div className="main-bg2 employer_profile d-flex justify-content-center flex-column align-items-center  h-100vh px-3 overflow-hidden">
      <div className="col-md-11 p-4 rounded-3 opacity">
        <h2 className="py-2 text-center " style={{"font-family":" cursive"}}>Candiate Status</h2>
        <div className=" text-end"><Link to={"/"} className="text-dark text-decoration-none fw-semibold">Add Jobs <i class="bi bi-arrow-right"></i></Link></div>
        <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom">

          <div className="col "><span className="">S.No</span></div>
          <div className="col"> <span>Role Name</span></div>
          <div className="col"><span>Company Name</span></div>
          <div className="col"><span>Status</span></div>
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
                {item.company_name}
              </div>
              <div className="col">
                {item.status}
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
    

  )
}
