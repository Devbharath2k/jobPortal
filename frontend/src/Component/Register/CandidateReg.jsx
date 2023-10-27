import React from "react";
import "./CandidateReg.css";
import image from "../../assets/image-1.png";
import image1 from "../../assets/image-2.png";

function CandidateReg() {
  return (
    <div className="container-fluid" id="CandidateReg">
      <div className="wrapper">
        <div className="inner">
          <img src={image} alt="" className="image-1" />
          <form>
            <div className="justify-content-center align-items-center">
              <p className="display-6 text-center">
                <span className="text-primary">Candidate </span>Register  Account
              </p>
              <hr className="w-100 text-primary" />
            </div>
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-md-6">
                <label htmlFor="firstName" className="mt-2 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  id="firstName"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="mt-2 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  id="lastName"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="mt-2 mb-2">
                  E-mail
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="E-mail"
                  id="email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="currentCompany" className="mt-2 mb-2">
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  className="form-control"
                  placeholder="Current Company"
                  id="currentCompany"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="currentCTC" className="mt-2 mb-2">
                  Current CTC
                </label>
                <input
                  type="text"
                  name="currentCTC"
                  className="form-control"
                  placeholder="Current CTC"
                  id="currentCTC"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="totalExperience" className="mt-2 mb-2">
                  Total Experience
                </label>
                <input
                  type="text"
                  name="totalExperience"
                  className="form-control"
                  placeholder="Total Experience"
                  id="totalExperience"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="mt-2 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  id="phoneNumber"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="mt-2 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <button className="btn btn-primary mt-4">Submit</button>
            </div>
          </form>
          <img src={image1} alt="" className="image-2" />
        </div>
      </div>
    </div>
  );
}

export default CandidateReg;