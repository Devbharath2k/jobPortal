import React, { useState } from "react";
import "../Style/employer_profile.css"
import { Link } from "react-router-dom";
import axios from "axios";

const Employer_profile = () => {
  const [roleCount, setRoleCount] = useState(1);
  const [formData, setFormData] = useState([{ roleName: "", openings: 0, budget: 0, experience: 0, notice_period: "", location: "" }]);
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
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
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
        axios.post("http://localhost:4000/employerProfilePost",formData)
        .then((res)=>{
              console.log("succes req")
        })
        .catch((err)=>{
              console.log(err)
        })

    }
  };



  const addRole = () => {
    setRoleCount(roleCount + 1);
    setFormData([...formData, { roleName: "", openings: 0, budget: 0, experience: 0, notice_period: "", location: "" }]);
    setEmptyFields([...emptyFields, {}]);
  };

  return (

    <div id="employer_profile" className="main-bg2 employer_profile d-flex justify-content-center flex-column align-items-center  h-100vh px-3 overflow-hidden">

      <div className="col-md-11 p-4 rounded-3 opacity">
        <h2 className="py-2 text-center " style={{"font-family":" cursive"}}>Employer Profile</h2>
        <div className=" text-end"><Link to={"/employer_Status"} className="text-dark text-decoration-none fw-semibold">view status <i class="bi bi-arrow-right"></i></Link></div>
        <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom">

          <div className="col "><span className="">cursor</span></div>
          <div className="col"> <span>Openings</span></div>
          <div className="col"><span>Budget</span></div>
          <div className="col"><span>Experience</span></div>
          <div className="col"><span>Notice_period</span></div>
          <div className="col"><span>Location</span></div>
          <div className="col-1 text-center">
            <i class="bi bi-plus-circle-fill plus-icon text-dark fs-4 ms-2 cursor" title="Add a new row" onClick={addRole}></i>
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
                  placeholder="Openings"
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
                  placeholder="Budget"
                  value={role.budget}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  name="experience"
                  className="form-control"
                  min={0}
                  placeholder="Experience"
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
                {/* <select
                  className="form-control"
                  name="location"
                  value={role.location}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  multiple // Add the 'multiple' attribute here
                >
                  <option value="chennai">Chennai</option>
                  <option value="banglore">Bangalore</option>
                  <option value="kerala">Kerala</option>
                </select> */}
              </div>

              <div className="col-1 text-center ">
                <span className="ms-2 text-danger" onClick={() => handleDelete(index)}>
                  <i className="bi bi-trash-fill delete-icon cursor" title="Delete the row" style={{ fontSize: "20px" }}></i>
                </span>
              </div>
            </div>
          ))}
          <button type="submit" className="btn btn-outline-light mx-auto d-block mt-5 px-4 submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Employer_profile;