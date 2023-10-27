import React, { useState } from "react";
import "../Style/employer_profile.css"

const Employer_profile = () => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   // Validation: Check if any form field is empty
  //   const hasEmptyFields = formData.some((role) => Object.values(role).some((value) => value === ''));
  
  //   if (hasEmptyFields) {
  //     // Handle empty fields (show an error message, prevent form submission, etc.)
  //     console.error("Error: All fields must be filled out.");
  //      // Highlight empty fields by adding a class
  //   const emptyFields = formData.map((role) => Object.fromEntries(Object.entries(role).map(([key, value]) => [key, value === ''])));
  //   setEmptyFields(emptyFields);
  //   } else {
  //     // All fields are filled, proceed with form submission or API call
  //     // Send formData to your API or perform necessary actions here
  //     console.log(formData);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation: Check if any form field is empty
    const emptyFieldsData = formData.map((role) => {
      return Object.fromEntries(Object.entries(role).map(([key, value]) => [key, value === '']));
    });
  
    setEmptyFields(emptyFieldsData);
  
    const hasEmptyFields = emptyFieldsData.some((role) => Object.values(role).some((value) => value));
  
    if (hasEmptyFields) {
      // Handle empty fields (show an error message, prevent form submission, etc.)
      console.error("Error: All fields must be filled out.");
    } else {
      // No empty fields, proceed with form submission or API call
      // Send formData to your API or perform necessary actions here
      console.log(formData);
    }
  };
  
  

  const addRole = () => {
    setRoleCount(roleCount + 1);
    setFormData([...formData, { roleName: "", openings: 0, budget: 0, experience: 0, days: "", location: "" }]);
    setEmptyFields([...emptyFields, {}]); 
  };

  return (
    <div id="employer_profile" className="employer_profile text-center h-100vh overflow-hidden">
      <h2 className="py-5 d-none">Employer Profile</h2>
      <div className="row labels align-items-center justify-content-center">
            
            <div className="col">Role Name</div>
            <div className="col"> Openings</div>
            <div className="col">Budget</div>
            <div className="col">Experience</div>
            <div className="col">Days</div>
            <div className="col">Location</div>
            <div className="col">
            <i class="bi bi-plus-circle-fill plus-icon text-success fs-4 ms-2 cursor" title="Add a new row" onClick={addRole}></i>
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
                    placeholder="Number of Openings"
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
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Days"
                    name="days"
                    value={role.days}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />
                </div>
                <div className="col d-flex">
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
                <div className="col">
                  <span className="ms-2 text-danger" onClick={() => handleDelete(index)}>
                    <i className="bi bi-trash-fill delete-icon" style={{ fontSize: "20px" }}></i>
                  </span>
                </div>
              </div>
            ))}
        <button type="submit" className="btn btn-primary px-4 submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Employer_profile;
