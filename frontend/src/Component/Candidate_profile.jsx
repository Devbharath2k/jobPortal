import React, { useState } from "react";

const Candidate_profile = () => {
  const [roleCount, setRoleCount] = useState(1);
  const [formData, setFormData] = useState([{ Role: "", experience: 0, Expected_CTC: 0, Location: "" }]);
  const [emptyFields, setEmptyFields] = useState([{}]);

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

    const newEmptyFields = [...emptyFields];
    newEmptyFields.splice(index, 1);
    setEmptyFields(newEmptyFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if any form field is empty
    const hasEmptyFields = formData.some((role) =>
      Object.values(role).some((value) => value === "")
    );

    if (hasEmptyFields) {
      console.error("Error: All fields must be filled out.");
    } else {
      console.log(formData);
    }
  };

  const addRole = () => {
    setRoleCount(roleCount + 1);
    setFormData([...formData, { Role: "", experience: 0, Expected_CTC: 0, Location: "" }]);
    setEmptyFields([...emptyFields, {}]);
  };

  return (
    <div id="employer_profile" className="main-bg2 employer_profile d-flex justify-content-center flex-column align-items-center  h-100vh px-3 overflow-hidden">
      <div className="col-md-10 border p-4 rounded-3 bg-light">
        <h2 className="py-2 text-center text-primary" style={{ "fontFamily": "cursive" }}>Candidate Profile</h2>
        <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-secondary justify-content-center text-start border-bottom">
          <div className="col"> <span>Role</span></div>
          <div className="col"><span>Experience</span></div>
          <div className="col"><span>Expected CTC</span></div>
          <div className="col"><span>Location</span></div>
          <div className="col text-center">
            <i className="bi bi-plus-circle-fill plus-icon text-success fs-4 ms-2 cursor" title="Add a new row" onClick={addRole}></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {formData.map((role, index) => (
            <div key={index} className={`row justify-content-center job pt-3 ${Object.values(emptyFields[index]).some((value) => value) ? 'has-error' : ''}`}>
              <div className="col p-3">
                <input
                  type="text"
                  name="Role"
                  className={`form-control `}
                  placeholder="Role Name"
                  value={role.Role}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col p-3">
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
              <div className="col p-3">
                <input
                  type="number"
                  name="Expected_CTC"
                  className="form-control"
                  min={0}
                  placeholder="Lpa"
                  value={role.Expected_CTC}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col p-3">
                <input
                  type="text"
                  name="Location"
                  className="form-control"
                  placeholder="Location"
                  value={role.Location}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
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

export default Candidate_profile;
