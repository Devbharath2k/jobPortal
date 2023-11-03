import React from "react";
import "./CandidateReg.css";
import image from "../../assets/image-1.png";
import image1 from "../../assets/image-2.png";
import axios from "axios";
import { useState } from "react";

function CandidateReg() {
  const [Regcandidate, SetCandidate] = useState({
    fname: "",
    lname: "",
    email: "",
    company:"",
    salary:"",
    experience:"",
    phone:"",
    password:"",
  });

  const Handlesubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/Candidatepost", Regcandidate)
      .then((res) => {
        if (res.data) {
          console.log(res.data.data);
        } else {
          console.log("Response data is undefined");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data) {
          console.log(err.response.data);
        } else {
          console.log("Error response data is undefined");
        }
      });
  }
  
  

  return (
    <div className="container-fluid" id="CandidateReg">
      <div className="wrapper">
        <div className="inner">
          <img src={image} alt="" className="image-1" />
          <form onSubmit={Handlesubmit}>
            <div className="justify-content-center align-items-center">
              <p className="display-6 text-center">
                <span className="text-primary">Candidate </span>Register Account
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
                  value={Regcandidate.fname}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      fname: e.target.value
                    })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="mt-2 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  className="form-control"
                  placeholder="Last Name"
                  id="lname"
                  value={Regcandidate.lname}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      lname: e.target.value
                    })}
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
                  value={Regcandidate.email}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      email: e.target.value
                    })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="currentCompany" className="mt-2 mb-2">
                  Current Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Current Company"
                  id="company"
                  value={Regcandidate.company}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      company: e.target.value
                    })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="currentCTC" className="mt-2 mb-2">
                  Current CTC
                </label>
                <input
                  type="text"
                  name="salary"
                  className="form-control"
                  placeholder="Current CTC"
                  id="salary"
                  value={Regcandidate.salary}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      salary: e.target.value
                    })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="totalExperience" className="mt-2 mb-2">
                  Total Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  className="form-control"
                  placeholder="Total Experience"
                  id="experience"
                  value={Regcandidate.experience}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      experience: e.target.value
                    })}
                  
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="mt-2 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  id="phone"
                  value={Regcandidate.phone}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      phone: e.target.value
                    })}
                  
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
                  value={Regcandidate.password}
                  onChange={e =>
                    SetCandidate({
                      ...Regcandidate,
                      password: e.target.value
                    })}
                />
              </div>
              <button className="btn btn-primary mt-4" type={"submit"}>Submit</button>
            </div>
          </form>
          <img src={image1} alt="" className="image-2" />
        </div>
      </div>
    </div>
  );
}

export default CandidateReg;
