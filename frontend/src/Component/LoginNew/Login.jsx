import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
export default function Login({ onAuthentication }) {
  const handleCandidateLogin = () => {
    console.log("candidate login");

    onAuthentication("candidate");
  };
  const handleEmployerLogin = () => {
    console.log("Employer login");

    onAuthentication("employer");
  };

  return (
    <div
      className="col-12 mx-auto main overflow-hidden h-100vh"
    >
      <div className="row login">
        <div className=" text-primary p-0 rounded-start-3 col-md-6 bg-white h-100vh align-items-center d-flex flex-column justify-content-center position-relative overflow-hidden">
          {/* <img className="logonew d-none" src={Logo} /> */}
          <p className="mb-0 logonew1 d-none">HIRE-IT</p>
          <form onSubmit={handleCandidateLogin}>
            <h3 className="mb-4 text-primary text-capitalize text-center">
              Looking for a job ?
            </h3>
            <div className="justify-content-center d-flex">
              <button className="btn btn-primary px-4 " type="submit">
                Login
              </button>
            </div>
            <div className="mt-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control shadow-none border border-0 border-bottom  pt-2 rounded-0 w-100"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-primary">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mb-0 fw-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control shadow-none border border-0 border-bottom border- rounded-0"
                id="exampleInputPassword1"
              />
            </div>
            <div className="row flex-column">
              <div className="col-md-12">
                <Link
                  to={"/"}
                  data-bs-toggle="modal"
                  data-bs-target="#emp_forgot"
                  className="text-center justify-content-center d-flex mt-3 fw-semibold"
                >
                  Forgot passsword?
                </Link>
              </div>
              <div className="col-md-12">
                <Link
                  className="text-center justify-content-center d-flex mt-3 fw-semibold"
                  to={"/CandidateReg"}
                >
                  New user Registeration?
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div
          className="modal fade"
          id="emp_forgot"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          data-bs-backdrop="static"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  EmployeeForgot Password
                </h1>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body px-5">
                <div>
                  <input type="email" className="form-control d-block shadow-none border-0 border-bottom rounded-0 border-secondary px-0 mb-3" placeholder="Valid Email" required />
                </div>
                <div>
                  <input type="text" className="form-control shadow-none border-0 border-bottom rounded-0 border-secondary px-0 mb-3" placeholder="OTP" required />
                </div>
                <div>
                  <input type="password" className="form-control shadow-none border-0 border-bottom rounded-0 border-secondary px-0" placeholder="New Password" required />
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-end-3 p-0 col-md-6 text-white h-100vh align-items-center d-flex flex-column justify-content-center"
          style={{ background: "#4835d4" }}
        >
          <form onSubmit={handleEmployerLogin}>
            <h3 className="mb-4 text-white text-capitalize text-center">
              Looking to hire Candidates ?
            </h3>
            <div className="justify-content-center d-flex">
              <button className="btn btn-light px-4 ">Login</button>
            </div>
            <div className="mt-4">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label fw-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control shadow-none border border-0 border-bottom  pt-2 rounded-0 w-100"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-white">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label mb-0 fw-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control shadow-none border border-0 border-bottom border- rounded-0"
                id="exampleInputPassword2"
              />
            </div>
            <div className="row flex-column">
              <div className="col-md-12">
                <Link
                  to={"/"}
                  data-bs-toggle="modal"
                  data-bs-target="#emp_forgot"
                  className="text-center justify-content-center d-flex mt-3 fw-semibold text-white "
                >
                  Forgot passsword?
                </Link>
              </div>
              <div className="col-md-12">
                <Link
                  className="text-center justify-content-center d-flex mt-3  text-white fw-semibold"
                  to={"/EmployerReg"}
                >
                  New user Registeration?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
