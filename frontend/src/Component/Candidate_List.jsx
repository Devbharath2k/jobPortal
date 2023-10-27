import React from 'react'
import { useState, useEffect } from 'react'

const Candidate_list = () => {
    const [status, setStatus] = useState([
        {
            name: "Dev BHARATH",
            role: "Developer",
            date: "20-10-23",
            status: "l1 completed",
            comments: "waiting for update"
        },
        {
            name: "BHARATH",
            role: "Developer",
            date: "20-10-23",
            status: "l1 completed",
            comments: "waiting for update"
        },
    ]);





    return (
        <div className='pt-5'>
            <div className="container-fluid">
                <h5 className=" text-center"> Candidate_list</h5>
                <div className='row'>
                    <div className=''>

                        <table className="table  table-striped justify-content-center text-center">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col"> Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {status.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.role}</td>
                                        <td>{item.date}</td>
                                        <td>{item.status}</td>
                                        <td>{item.comments}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>


        </div>

    )
}

export default Candidate_list



