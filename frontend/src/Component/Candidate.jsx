import React from "react";
import "./Candidate.css";
import logo from "../assets/IT.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//
import { useFormik } from 'formik';
import * as Yup from 'yup';



function Candidate() {
  const [formKey, setFormKey] = useState(0);
  const navigate = useNavigate();

  const getFormConfig = () => {
    return {
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          // .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),  
      }),
    };
  };

  const formik = useFormik({
    ...getFormConfig(), // Set initial form values and validation schema
    onSubmit: values => {
      // Handle form submission here
      console.log('Form submitted with values:', values);
    },
  });

  const switchForm = () => {
    console.log("key", formKey);
    console.log("trigg");
    // Increment the key to reset the form state
    setFormKey(prevKey => prevKey + 1);
    // Reset the form values and validation schema
    formik.setValues(getFormConfig().initialValues);
    formik.setErrors({});
    formik.setTouched({});
  };

  const handleLogin =()=>{}
  return (
    <div id="login_page">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" height={"49px"} />
          </a>
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
                <a className="nav-link" to="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid login">
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
                     onChange={switchForm}
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
                                // name="logemail"
                                class="form-style mb-2"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"


                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              <span className="text-danger">
                                {formik.touched.email && formik.errors.email ? (
                                  <div>{formik.errors.email}</div>
                                ) : null}
                              </span>
                              <i class="input-icon uil uil-at" />
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
                              <span className="text-danger">
                                {formik.touched.password && formik.errors.password ? (
                                  <div>{formik.errors.password}</div>
                                ) : null}</span>
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <button className="btn btn-primary mt-3" type={"submit"} >Submit</button>
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
                                // name="logemail"
                                class="form-style mb-2"
                                placeholder="Your Email"
                                // id="logemail"
                                autocomplete="off"
                                //
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              <i class="input-icon uil uil-at" />
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
                              <a to="#" class="link">
                                New <span className="">Recruiter Sign Up</span>
                              </a>

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

export default Candidate;
