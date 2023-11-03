import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';
import Bg from './Bg';
import axios from "axios";

const Employer_Status = () => {
  const [status, setStatus] = useState([
    {
      role: "Frontend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Backend-development",
      openings: 15,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Frontend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Backend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Frontend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Backend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Frontend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Backend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Frontend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Backend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Frontend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
    {
      role: "Backend-development",
      openings: 10,
      remaining_openings: 3,
      status: "open",
      comments: "still open",
    },
  ]);




  // Assume employerId is a variable containing the employer's ID
const employerId = 123; // Replace this with the actual employer ID

// Make a GET request with the employerId as a query parameter
axios.get(`http://localhost:4000/getEmployerStatus?employerId=${employerId}`)
  .then((response) => {
    // Handle the response data from the backend
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });

  return (

    <div className="main-bg2 h-100vh px-3 overflow-hidden">
      <Bg />
      <div className="h-100vh employer_profile d-flex justify-content-center flex-column align-items-center">
        <h2 className="py-2 text-center text-light  " style={{ "font-family": " cursive" }}>Employer Status</h2>
        <p className="col-md-8 text-center text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias eius magnam asperiores expedita explicabo ullam ducimus veniam dolorem, iusto praesentium rem eligendi deleniti, inventore voluptatibus consectetur modi quasi quos.
        </p>
        <Scroll />

      </div>
      <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
        <div className="opacity col-12 col-md-11 rounded-3 overflow-hidden">
          <div className="pb-4">
            <div className="text-end m-4">
              <Link to={"/"} className="text-light text-decoration-none fw-semibold">
                Add Jobs <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className='table-responsive tab-height'>

              <table className="w-100 table m-0 text-white">
                <thead className="labels text-capitalize text-white text-center table-opacity rounded-top border-bottom">
                  <td className="col p-md-4 px-4 py-3 ">S.No</td>
                  <td className="col p-md-4 px-4 py-3 "> Role Name</td>
                  <td className="col p-md-4 px-4 py-3 ">Openings</td>
                  <td className="col p-md-4 px-4 py-3 ">Remaining openings</td>
                  <td className="col p-md-4 px-4 py-3 ">Status</td>
                  <td className="col p-md-4 px-4 py-3 ">Comments</td>
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
                    <td className="col p-2">
                      {item.remaining_openings}
                    </td>
                    <td className="col p-2">
                      {item.status}
                    </td>
                    <td className="col p-2">
                      {item.comments}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Employer_Status;
