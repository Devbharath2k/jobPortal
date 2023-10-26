import React from 'react'
import { useState,useEffect } from 'react'


const Candidate_Status = () => {
    const [status, setStatus] = useState([
        {role:"Frontend-development",
        openings: 10,
        remaining_openings:3,
        status:"open",
        comments:"still open"    
        },
        {role:"Bankend-development",
        openings: 10,
        remaining_openings:3,
        status:"open",
        comments:"still open"    
        },
    ]);





  return (
    <div className=''>
        <div className="container my-5">
        <p className="display-6 text-center">Employer status</p>
        <div className="d-flex justify-content-end">
            <button className="btn btn-danger ">Add jobs</button>
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

  )
}

export default Candidate_Status



 