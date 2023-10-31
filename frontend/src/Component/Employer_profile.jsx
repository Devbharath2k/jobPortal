import React, { useState } from "react";
import "../Style/employer_profile.css"
import { Link } from "react-router-dom";

import axios from "axios";

import Scroll from "./Scroll";
import Bg from "./Bg";

const Employer_profile = () => {
  const [roleCount, setRoleCount] = useState(1);
  const [formData, setFormData] = useState([{ roleName: "", openings: "" , budget: "", experience: "", notice_period: "", location: "" }]);
  const [emptyFields, setEmptyFields] = useState(Array.from({ length: formData.length }, () => ({})));

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    // if(name == "location"){
    //   const newFormData = [...formData];
    // newFormData[index][name] = Array.from(e.target.selectedOptions, option => option.value);;
    // setFormData(newFormData);
    // }else{
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  // }

  };
console.log("formData",formData)


  const handleDelete = (index) => {
    if(roleCount > 1){
    setRoleCount(roleCount - 1);
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
    }
  };




  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation: Check if any form field is empty
    const emptyFieldsData = formData.map((role) => {
      return Object.fromEntries(Object.entries(role).map(([key, value]) => [key, value === '']));
    });

    setEmptyFields(emptyFieldsData);

    const hasEmptyFields = emptyFieldsData.some((role) => Object.values(role).some((value) => value));
    console.log("hasEmptyFields",hasEmptyFields)


    if (hasEmptyFields) {
      console.error("Error: All fields must be filled out.");
    } else {
      console.log(formData);
      let employerId = 12
      let company = "xyz"
        axios.post("http://localhost:4000/employerProfilePost",{
          formData: formData,
          employerId: employerId,
          company: company
        })
        .then((res)=>{
              console.log("succes req")
              setFormData([{ roleName: "", openings:"", budget: "", experience: "", notice_period: "", location: "" }]);
       
        })
        .catch((err)=>{
              console.log(err)
        })

    }
  };



  const addRole = () => {
    setRoleCount(roleCount + 1);
    setFormData([...formData, { roleName: "", openings: "", budget: "", experience: "", notice_period: "", location: "" }]);
    setEmptyFields([...emptyFields, {}]);
  };

  return (

    <div id="employer_profile" className="main-bg2 h-100vh px-3 overflow-hidden">
      <Bg />
      <div className="h-100vh employer_profile d-flex justify-content-center flex-column align-items-center">
        <h2 className="py-2 text-center text-light  " style={{ "font-family": " cursive" }}>Employer Profile</h2>
        <p className="col-md-8 text-center text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias eius magnam asperiores expedita explicabo ullam ducimus veniam dolorem, iusto praesentium rem eligendi deleniti, inventore voluptatibus consectetur modi quasi quos.
        </p>
        <Scroll />
      </div>
      <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
        <div className="opacity col-md-11 rounded-3 overflow-hidden">
          <div className="tab-height p-4">
            <div className=" text-end"><Link to={"/employer_Status"} className="text-white text-decoration-none fw-semibold">view status <i class="bi bi-arrow-right"></i></Link></div>
            <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom">

              <div className="col "><span className="">Role Name</span></div>
              <div className="col"> <span>Openings</span></div>
              <div className="col"><span>Budget</span></div>
              <div className="col"><span>Experience</span></div>
              <div className="col"><span>Notice Period</span></div>
              <div className="col"><span>Location</span></div>
              <div className="col-1 text-center">
                <i class="bi bi-plus-circle-fill plus-icon text-light hover fs-4 ms-2 cursor" title="Add a new row" onClick={addRole}></i>
              </div>
            </div>
            {/* ...your existing code... */}
            <form onSubmit={handleSubmit} >
              {/* ... your input fields ... */}
              {formData.map((role, index) => (
                <div key={index} className={`row justify-content-center job pt-3 ${emptyFields[index].roleName ? 'has-error' : ''}`}>

                  <div className="col">
                    <input
                      type="text"
                      name="roleName"
                      className={`form-control `}

                      placeholder="Role Name"
                      value={role.roleName}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                    />

                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="openings"
                      className="form-control"
                      min={0}
                      placeholder="No of openings"
                      value={role.openings}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="budget"
                      className="form-control"
                      min={0}
                      placeholder="CTC"
                      value={role.budget}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="experience"
                      className="form-control"
                      min={0}
                      placeholder="Exp"
                      value={role.experience}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Days"
                      name="notice_period"
                      value={role.notice_period}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      name="location"
                      value={role.location}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                    />
                  </div>
                  <div className="col-1 text-center">
                    <span className="ms-2 text-danger" onClick={() => handleDelete(index)}>
                      <i className="bi bi-trash-fill delete-icon cursor" title="Delete hover the row" style={{ fontSize: "20px" }}></i>
                    </span>
                  </div>
                </div>
              ))}
              <button type="submit" className="btn btn-outline-light mx-auto d-block px-4 submit-button mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employer_profile;