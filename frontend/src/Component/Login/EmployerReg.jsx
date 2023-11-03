import React from "react";
import "./EmployerReg.css";
import { useState } from "react";
import axios from "axios";

function EmployerReg() {
  const [employers, setEmployers] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    phone: "",
    password: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/employerpost", employers)
      .then(response => {
        console.log(response.data.data);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <div id="EmployerReg">
      <div className="container Register my-2 mt-3" id="EMployer">
        <div className="text">Employer Register form</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data ">
              <input
                type="text"
                value={employers.fname}
                onChange={e =>
                  setEmployers({
                    ...employers,
                    fname: e.target.value
                  })}
              />
              <div className="" />
              <label htmlFor="">First Name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                value={employers.lname}
                onChange={e =>
                  setEmployers({
                    ...employers,
                    lname: e.target.value
                  })}
              />
              <div className="underline" />
              <label htmlFor="">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="email"
                value={employers.email}
                onChange={e =>
                  setEmployers({
                    ...employers,
                    email: e.target.value
                  })}
              />
              <div className="underline" />
              <label htmlFor="">Email Address</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                value={employers.company}
                onChange={e =>
                  setEmployers({
                    ...employers,
                    company: e.target.value
                  })}
              />
              <div className="underline" />
              <label htmlFor="">Current company</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data">
              <input
                type="number"
                value={employers.phone}
                onChange={e =>
                  setEmployers({
                    ...employers,
                    phone: e.target.value
                  })}
              />
              <div className="underline" />
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="input-data">
              <input
                type="password"
                value={employers.password}
                onChange={e =>
                  setEmployers({
                    ...employers,
                    password: e.target.value
                  })}
              />
              <div className="underline" />
              <label htmlFor="">Password</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <div className="form-row submit-btn justify-content-center align-items-center">
                <div className="input-data">
                  <div className="inner" />
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployerReg;
