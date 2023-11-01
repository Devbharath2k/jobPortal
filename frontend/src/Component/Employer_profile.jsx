import React, { useState } from "react";
import "../Style/employer_profile.css"
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import Bg from "./Bg";

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
        <div className="opacity col-12 col-md-11 rounded-3 overflow-hidden">
          <div className="pb-4">
            <div className=" text-end m-4"><Link to={"/employer_Status"} className="text-white text-decoration-none fw-semibold">view status <i class="bi bi-arrow-right"></i></Link></div>

            {/* ...your existing code... */}
            <form onSubmit={handleSubmit} >
              <div className="table-responsive tab-height mb-3 " >
                <table className="w-100 table m-0">
                  <thead className="labels text-capitalize text-white text-center table-opacity rounded-top border-bottom">
                    <td className="col p-md-4 px-5 py-3 ">Role Name</td>
                    <td className="col p-md-4 px-5 py-3 "> Openings</td>
                    <td className="col p-md-4 px-5 py-3 ">Budget</td>
                    <td className="col p-md-4 px-5 py-3 ">Experience</td>
                    <td className="col p-md-4 px-5 py-3 ">Days</td>
                    <td className="col p-md-4 px-5 py-3 ">Location</td>
                    <td className="col p-md-4 px-5 py-3  text-center">
                      <i class="bg-transparent bi bi-plus-circle-fill plus-icon text-light hover fs-4 ms-2 cursor" title="Add a new row" onClick={addRole}></i>
                    </td>
                  </thead>
                  {formData.map((role, index) => (
                    <tr key={index} className={` job ${emptyFields[index].roleName ? 'has-error' : ''}`}>

                      <td className="col ps-4 pt-3">
                        <input
                          type="text"
                          name="roleName"
                          className={`form-control `}

                          placeholder="Role Name"
                          value={role.roleName}
                          onChange={(e) => handleInputChange(index, e)}
                          required
                        />

                      </td>
                      <td className="col ps-4 pt-3">
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
                      </td>
                      <td className="col ps-4 pt-3">
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
                      </td>
                      <td className="col ps-4 pt-3">
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
                      </td>
                      <td className="col ps-4 pt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Days"
                          name="days"
                          value={role.days}
                          onChange={(e) => handleInputChange(index, e)}
                          required
                        />
                      </td>
                      <td className="col ps-4 pt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          name="location"
                          value={role.location}
                          onChange={(e) => handleInputChange(index, e)}
                          required
                        />
                      </td>
                      <td className="col-1 text-center p-3">
                        <span className="ms-2 text-danger bg-transparent" onClick={() => handleDelete(index)}>
                          <i className="bi bi-trash-fill delete-icon cursor" title="Delete hover the row" style={{ fontSize: "20px" }}></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              {/* ... your input fields ... */}

              <button type="submit" className="btn btn-outline-light mx-auto d-block px-4 submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employer_profile;