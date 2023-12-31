import React, { useState } from "react";
import "../Style/employer_profile.css"
import { Link } from "react-router-dom";

const UpdateCandidate = () => {
  const [roleCount, setRoleCount] = useState(1);
  const [formData, setFormData] = useState([{ roleName: "", openings: 0, budget: 0, experience: 0, days: "", location: "" }]);
  const [emptyFields, setEmptyFields] = useState(Array.from({ length: formData.length }, () => ({})));

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

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

    if (hasEmptyFields) {
      console.error("Error: All fields must be filled out.");
    } else {
      console.log(formData);
    }
  };



  const addRole = () => {
    setRoleCount(roleCount + 1);
    setFormData([...formData, { roleName: "", openings: 0, budget: 0, experience: 0, days: "", location: "" }]);
    setEmptyFields([...emptyFields, {}]);
  };

  return (

    <div id="update_candidate" className="main-bg2 employer_profile d-flex justify-content-center flex-column h-100vh px-3 overflow-hidden">
      <div className=" border p-4 rounded-3 bg-light">
        <div className="row">
          
        <h2 className="py-2 text-center text-primary" style={{"font-family":" cursive"}}>Update Candidate</h2>
        {/* <div className=" text-end"><Link to={"/employer_Status"}>view status</Link></div> */}
           </div>
        <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-center text-secondary justify-content-center text-start border-bottom">

          <div className="col "><span className="">Candidate Name</span></div>
          <div className="col"> <span>Role</span></div>
          <div className="col"><span>Date</span></div>
          <div className="col"><span>Status</span></div>
          <div className="col"><span>Command</span></div>
          {/* <div className="col"><span>Location</span></div> */}
          <div className="col text-center">
            <i class="bi bi-plus-circle-fill plus-icon text-success fs-4 ms-2 cursor" title="Add a new row" onClick={addRole}></i>
          </div>
        </div>
        {/* ...your existing code... */}
        <form onSubmit={handleSubmit} >
          {/* ... your input fields ... */}
          {formData.map((role, index) => (
            <div key={index} className={`row justify-content-center job pt-3 ${emptyFields[index].roleName ? 'has-error' : ''}`}>

              <div className="col p-3">
                <input
                  type="text"
                  name="roleName"
                  className={`form-control `}

                  placeholder="Name"
                  value={role.name}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />

              </div>
              <div className="col p-3">
                <input
                  type="text"
                  name="roleName"
                  className="form-control"
                  placeholder="roleName"
                  value={role.roleName}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col p-3">
                <input
                  type="date"
                  name="budget"
                  className="form-control"
                 
                //   placeholder="Budget"
                  value={role.date}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col p-3">
                <input
                  type="text"
                  name="status"
                  className="form-control"
                  min={0}
                  placeholder="status"
                  value={role.status}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="command"
                  name="command"
                  value={role.command}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              {/* <div className="col p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  name="location"
                  value={role.location}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div> */}
              <div className="col text-center p-3">
                <span className="ms-2 text-danger" onClick={() => handleDelete(index)}>
                  <i className="bi bi-trash-fill delete-icon cursor" title="Delete the row" style={{ fontSize: "20px" }}></i>
                </span>
              </div>
            </div>
          ))}
          <button type="submit" className="btn btn-outline-primary mx-auto d-block px-4 submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCandidate;
