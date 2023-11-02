import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Bg from './Bg';
import Scroll from './Scroll';


export default function Candiate_status() {
  const [status, setStatus] = useState([
    {
      role: "Frontend-development",
      company_name: "Axess_tech",
      status: "open",
      openings: "32"
    },
    {
      role: "Bankend-development",
      company_name: "Axess_tech",
      status: "open",
      openings:"7"
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

      <div className="main-bg3 h-100vh px-3 overflow-hidden">
        <Bg />
        <div className="h-100vh employer_profile d-flex justify-content-center flex-column align-items-center">
          <h2 className="py-2 text-center text-light  " style={{ "font-family": " cursive" }}>Employer Status</h2>
          <p className="col-md-8 text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias eius magnam asperiores expedita explicabo ullam ducimus veniam dolorem, iusto praesentium rem eligendi deleniti, inventore voluptatibus consectetur modi quasi quos.
          </p>
          <Scroll />

        </div>
        <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
          <div className="opacity col-12 col-md-11 rounded-3 overflow-hidden pb-4">
            <div className="text-end m-4">
              <Link to={"/"} className="text-light text-decoration-none fw-semibold">
                Add Jobs <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="table-responsive tab-height">
              <table className="w-100 table m-0 text-white">
                <thead className="labels text-capitalize text-white text-center table-opacity rounded-top border-bottom">
                  <td className="col p-md-4 px-4 py-3 ">S.No</td>
                  <td className="col p-md-4 px-4 py-3 "> Role Name</td>
                  <td className="col p-md-4 px-4 py-3 ">Openings</td>
                  <td className="col p-md-4 px-4 py-3 ">Company Name</td>
                  <td className="col p-md-4 px-4 py-3 ">Status</td>
                  <td className="col p-md-4 px-4 py-3 ">Edit</td>
                </thead>
                {status.map((item, index) => (
                  <tr key={index} className={` job text-center`}>

                    <td className="col p-3">
                      {index + 1}
                    </td>
                    <td className="col p-3">
                      {item.role}
                    </td>
                    <td className="col p-3">
                      {item.openings}
                    </td>
                    <td className="col p-3">
                      {item.company_name}
                    </td>
                    <td className="col p-3">
                      {item.status}
                    </td>
                    <td className='col'>
                      <Link to={'#view'} className='bg-transparent'><i class="bi bi-eye bg-transparent cursor  text-light" title='View'></i></Link>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
