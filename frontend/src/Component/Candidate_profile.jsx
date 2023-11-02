// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const CandidateProfile = () => {
//   // State variables
//   const [roleCount, setRoleCount] = useState(1);
//   const [formData, setFormData] = useState([
//     {
//       roleName: "",
//       experience: "",
//       Expected_CTC: "",
//       location: "",
//     },
//   ]);
//   const [emptyFields, setEmptyFields] = useState(
//     Array.from({ length: formData.length }, () => ({}))
//   );

//   // Event handlers
//   const handleInputChange = (index, e) => {
//     const { name, value } = e.target;
//     const newFormData = [...formData];
//     newFormData[index][name] = value;
//     setFormData(newFormData);
//   };

//   const handleDelete = (index) => {
//     const newFormData = formData.filter((_, i) => i !== index);
//     setFormData(newFormData);
//     const newEmptyFields = emptyFields.filter((_, i) => i !== index);
//     setEmptyFields(newEmptyFields);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation: Check if any form field is empty
//     const emptyFieldsData = formData.map((role) => {
//       return Object.fromEntries(
//         Object.entries(role).map(([key, value]) => [key, value === ""])
//       );
//     });
//     setEmptyFields(emptyFieldsData);

//     const hasEmptyFields = emptyFieldsData.some((role) =>
//       Object.values(role).some((value) => value)
//     );

//     if (hasEmptyFields) {
//       console.error("Error: All fields must be filled out.");
//     } else {
//       try {
//         const response = await axios.post(
//           "http://localhost:4000/CandidateProfile",
//           formData
//         );
//         console.log(response.data);

//         // Reset the form
//         setFormData([
//           {
//             roleName: "",
//             experience: "",
//             Expected_CTC: "",
//             location: "",
//           },
//         ]);
//         setRoleCount(1);
//         setEmptyFields(Array.from({ length: 1 }, () => ({})));
//       } catch (error) {
//         console.error("Error: Failed to submit the form.", error);
//       }
//     }
//   };

//   const addRole = () => {
//     setRoleCount(roleCount + 1);
//     setFormData([
//       ...formData,
//       {
//         roleName: "",
//         experience: "",
//         Expected_CTC: "",
//         location: "",
//       },
//     ]);
//     setEmptyFields([...emptyFields, {}]);
//   };

//   return (
//     <div className="main-bg2 employer_profile d-flex justify-content-center flex-column align-items-center  h-100vh px-3 overflow-hidden">
//       <div className="col-12 p-4 rounded-3 opacity">
//         <h2 className="py-2 text-center" style={{ fontFamily: "cursive" }}>
//           Candidate Profile
//         </h2>
//         <div className=" text-end">
//           <Link
//             to={"/candidate_Status"}
//             className="text-dark text-decoration-none fw-semibold"
//           >
//             view status{" "}
//             <i className="bi bi-arrow-right"></i>
//           </Link>
//         </div>
//         <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom">
//           <div className="col">Tech Stack</div>
//           <div className="col">Experience</div>
//           <div className="col">Expected CTC</div>
//           <div className="col">Location</div>
//           <div className="col-1 text-center">
//             <i
//               className="bi bi-plus-circle-fill plus-icon text-dark fs-4 ms-2 cursor"
//               title="Add a new row"
//               onClick={addRole}
//             ></i>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           {formData.map((role, index) => (
//             <div
//               key={index}
//               className={`row justify-content-center job pt-3 ${emptyFields[index].roleName ? "has-error" : ""
//                 }`}
//             >
//               <div className="col p-3">
//                 <input
//                   type="text"
//                   name="roleName"
//                   className={`form-control`}
//                   placeholder="Role Name"
//                   value={role.roleName}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                 />
//               </div>
//               <div className="col p-3">
//                 <input
//                   type="number"
//                   name="experience"
//                   className="form-control"
//                   min={0}
//                   placeholder="Experience"
//                   value={role.experience}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                 />
//               </div>
//               <div className="col p-3">
//                 <input
//                   type="number"
//                   name="Expected_CTC"
//                   className="form-control"
//                   min={0}
//                   placeholder="LPA"
//                   value={role.Expected_CTC}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                 />
//               </div>
//               <div className="col p-3">
//                 <input
//                   type="text"
//                   name="location"
//                   className="form-control"
//                   placeholder="Location"
//                   value={role.location}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                 />
//               </div>
//               <div className="col-1 text-center p-3">
//                 <span
//                   className="ms-2 text-danger"
//                   onClick={() => handleDelete(index)}
//                 >
//                   <i
//                     className="bi bi-trash-fill delete-icon cursor"
//                     title="Delete the row"
//                     style={{ fontSize: "20px" }}
//                   ></i>
//                 </span>
//               </div>
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="btn btn-outline-light mx-auto d-block px-4 submit-button"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CandidateProfile;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CandidateProfile = () => {
  // State variables
  const [roleCount, setRoleCount] = useState(1);
  const [formData, setFormData] = useState([
    {
      roleName: "",
      experience: 0,
      Expected_CTC: 0,
      location: "",
    },
  ]);
  const [emptyFields, setEmptyFields] = useState(
    Array.from({ length: formData.length }, () => ({}))
  );

  // Event handlers
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const handleDelete = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
    const newEmptyFields = emptyFields.filter((_, i) => i !== index);
    setEmptyFields(newEmptyFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if any form field is empty
    const emptyFieldsData = formData.map((role) => {
      return Object.fromEntries(
        Object.entries(role).map(([key, value]) => [key, value === ""])
      );
    });
    setEmptyFields(emptyFieldsData);

    const hasEmptyFields = emptyFieldsData.some((role) =>
      Object.values(role).some((value) => value)
    );

    if (hasEmptyFields) {
      console.error("Error: All fields must be filled out.");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/CandidateProfile",
          formData
        );
        console.log(response.data);

        // Reset the form
        setFormData([
          {
            roleName: "",
            experience: 0,
            Expected_CTC: 0,
            location: "",
          },
        ]);
        setRoleCount(1);
        setEmptyFields(Array.from({ length: 1 }, () => ({})));
      } catch (error) {
        console.error("Error: Failed to submit the form.", error);
      }
    }
  };

  const addRole = () => {
    setRoleCount(roleCount + 1);
    setFormData([
      ...formData,
      {
        roleName: "",
        experience: 0,
        Expected_CTC: 0,
        location: "",
      },
    ]);
    setEmptyFields([...emptyFields, {}]);
  };

  return (
    <div className="main-bg2 employer_profile d-flex justify-content-center flex-column align-items-center  h-100vh px-3 overflow-hidden">
      <div className="col-12 p-4 rounded-3 opacity">
        <h2 className="py-2 text-center" style={{ fontFamily: "cursive" }}>
          Candidate Profile
        </h2>
        <div className=" text-end">
          <Link
            to={"/candidate_Status"}
            className="text-dark text-decoration-none fw-semibold"
          >
            view status{" "}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="row labels py-3 align-items-center fw-semibold text-capitalize text-white justify-content-center text-start border-bottom">
          <div className="col">Tech Stack</div>
          <div className="col">Experience</div>
          <div className="col">Expected CTC</div>
          <div className="col">Location</div>
          <div className="col-1 text-center">
            <i
              className="bi bi-plus-circle-fill plus-icon text-dark fs-4 ms-2 cursor"
              title="Add a new row"
              onClick={addRole}
            ></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {formData.map((role, index) => (
            <div
              key={index}
              className={`row justify-content-center job pt-3 ${emptyFields[index].roleName ? "has-error" : ""
                }`}
            >
              <div className="col p-3">
                <input
                  type="text"
                  name="roleName"
                  className={`form-control`}
                  placeholder="Role Name"
                  value={role.roleName}
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
                  placeholder="LPA"
                  value={role.Expected_CTC}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col p-3">
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Location"
                  value={role.location}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                />
              </div>
              <div className="col-1 text-center p-3">
                <span
                  className="ms-2 text-danger"
                  onClick={() => handleDelete(index)}
                >
                  <i
                    className="bi bi-trash-fill delete-icon cursor"
                    title="Delete the row"
                    style={{ fontSize: "20px" }}
                  ></i>
                </span>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="btn btn-outline-light mx-auto d-block px-4 submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateProfile;