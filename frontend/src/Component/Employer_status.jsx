import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';
import Bg from './Bg';

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
      <div className="h-100vh d-flex justify-content-center flex-column align-items-center text-light">
        <div className="opacity col-md-11 rounded-3 overflow-hidden">
          <div className="tab-height px-2 overflow-x-hidden pb-4">
            <div className="text-end my-4">
              <Link to={"/"} className="text-light text-decoration-none fw-semibold">
                Add Jobs <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="row text-center labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom position-sticky top-0 opacity table-opacity rounded-top">
              <div className="col-1">
                <span>S.No</span>
              </div>
              <div className="col">
                <span>Role Name</span>
              </div>
              <div className="col">
                <span>Openings</span>
              </div>
              <div className="col">
                <span>Remaining openings</span>
              </div>
              <div className="col">
                <span>Status</span>
              </div>
              <div className="col">
                <span>Comments</span>
              </div>
            </div>

            {status.map((item, index) => (
              <div key={index} className={`row justify-content-center text-center job pt-3 fs-6 fw-semibold`}>
                <div className="col-1">{index + 1}</div>
                <div className="col">{item.role}</div>
                <div className="col">{item.openings}</div>
                <div className="col">{item.remaining_openings}</div>
                <div className="col">{item.status}</div>
                <div className="col">{item.comments}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Employer_Status;
