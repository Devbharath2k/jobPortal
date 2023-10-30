
import React from "react";
// import logo from "../assets/IT.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../Style/Login.css";


function CandidateLogin() {
  

  


  const handleLogin =()=>{}
  return (
    <div id="login_page" className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            {/* <img src={logo} alt="" height={"49px"} /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div class="section">
          <div class="container">
            <div class="row full-height justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3">
                    <span className="text-white">Candidate</span>
                    <span className="text-white">Recruiter</span>
                  </h6>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                    
                  />
                  <label for="reg-log" />
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3 mt-5 text-white"> Candidate Log In</h4>
                            <form onSubmit={formik.handleSubmit}>
                            <div class="form-group">
                              <input
                                type="email"
                                name="logemail"
                                class="form-style mb-2"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                              />
                              
                            </div>
                            <div class="form-group mt-2">
                              <input
                                // type="password"
                                // name="logpass"
                                class="form-style"
                                placeholder="Your Password"
                                // id="logpass"
                                // autocomplete="off"
                                //
                                type="password"
                                // id="password"
                                name="password"
                            
                              />
                             
                            </div>
                            <button className="btn btn-primary mt-3">Submit</button>
                            </form>
                            <p class="mb-0 mt-4 text-center">
                              <Link to="#" class="link">
                                New  <span className=""> Candidate Sign Up</span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3 mt-4 text-white">Recruiter Login </h4>

                            <div class="form-group">
                              <input
                                type="email"
                               
                                class="form-style mb-2"
                                placeholder="Your Email"
                                
                                autocomplete="off"
                                //
                                
                              />
                             
                            </div>
                            <div class="form-group mt-2">
                              <input
                                // type="password"
                                // name="logpass"
                                class="form-style"
                                 placeholder="Your Password"
                                // id="logpass"
                                // autocomplete="off"
                                //
                                type="password"
                                // id="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <button className="btn btn-primary mt-4" onClick={() => handleLogin("recruiter")}>Submit</button>
                            <p class="mb-0 mt-4 text-center">
                              <Link to="#" class="link">
                                New <span className="">Recruiter Sign Up</span>
                              </Link>

                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateLogin;
