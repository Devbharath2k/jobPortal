import React from "react";
import { Link } from "react-router-dom";
import "../../Style/Login.css";

function CandidateLogin() {
  return (
    <div id="login_page" className="container-fluid">
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
                            <h4 class="mb-4 pb-3 mt-5 text-white">
                              {" "}Candidate Log In
                            </h4>
                            <form>
                              <div class="form-group">
                                <input
                                  type="email"
                                  name="logemail"
                                  class="form-style mb-2"
                                  placeholder="Your Email"
                                  autocomplete="off"
                                />
                              </div>
                              <div class="form-group mt-2">
                                <input
                                  class="form-style"
                                  placeholder="Your Password"
                                  type="password"
                                  name="password"
                                />
                              </div>
                              <button className="btn btn-primary mt-3">
                                Submit
                              </button>
                            </form>
                            <div className="row">
                              <div className="col-md-6">
                                <p class="mb-0 mt-4 text-center">
                                  <Link to="#" class="link">
                                    New{" "}
                                    <span className=""> Candidate Sign Up</span>
                                  </Link>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p class="mb-0 mt-4 text-center">
                                  <Link to="#" class="link">
                                    {" "}
                                    <span className="">Forget Password</span>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3 mt-4 text-white">
                              Recruiter Login{" "}
                            </h4>

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
                                class="form-style"
                                placeholder="Your Password"
                                type="password"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <button className="btn btn-primary mt-4">
                              Submit
                            </button>
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
