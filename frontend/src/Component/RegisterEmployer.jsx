import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function RegisterEmployer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>welcome to code</p>
        </div>
        <div className="col-md-6">
          <div class="form-bg">
            <div class="container">
              <div class="row">
                <div class="">
                  <div class="form-container">
                    <h3 class="title"> Employer Register</h3>
                    <form class="form-horizontal">
                      <div class="form-group">
                        <label>Firist Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Firist Name"
                        />
                      </div>
                      <div class="form-group">
                        <label>Last Name</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="form-group">
                        <label>E-mail</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div class="form-group">
                        <label>Current Company</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Current Company"
                        />
                      </div>
                      <div class="form-group">
                        <label>Current CTC</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Current CTC"
                        />
                      </div>
                      <div class="form-group">
                        <label>Total Experience</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Total Experience"
                        />
                      </div>
                      <div class="form-group">
                        <label>Phone-Number</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Phone-Number"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <span class="signin-link text-center mx-5 ms-5 mb-3">
                        Already have an account? Click here to{" "}
                        <Link href="/">Login</Link>
                      </span>
                      <button class="form-control btn btn-danger">
                        Create Account
                      </button>
                    </form>
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

export default RegisterEmployer;
