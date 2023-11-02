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
import Scroll from "./Scroll";
import Bg from "./Bg";

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
    <div className="main-bg3 h-100vh px-3 overflow-hidden">
      <Bg />
      <div className="h-100vh employer_profile d-flex justify-content-center flex-column align-items-center">
        <h2 className="py-2 text-center text-light  " style={{ "font-family": " cursive" }}>Candidate Profile </h2>
        <p className="col-md-8 text-center text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias eius magnam asperiores expedita explicabo ullam ducimus veniam dolorem, iusto praesentium rem eligendi deleniti, inventore voluptatibus consectetur modi quasi quos.
        </p>
        <Scroll />
      </div>
      <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
        <div className="opacity col-12 col-md-11 rounded-3 overflow-hidden pb-4">
          <div className=" text-end m-4"><Link to={"/candidate_Status"} className="text-white text-decoration-none fw-semibold">view status <i class="bi bi-arrow-right"></i></Link></div>
          <form onSubmit={handleSubmit} >
            <div className="table-responsive tab-height mb-3 " >
              <table className="w-100 table m-0 text-white">
                <thead className="labels text-capitalize text-center table-opacity rounded-top border-bottom">
                  <td className="col p-md-4 px-5 py-3 ">Tech Stack</td>
                  <td className="col p-md-4 px-5 py-3 "> Experience</td>
                  <td className="col p-md-4 px-5 py-3 ">Expected CTC</td>
                  <td className="col p-md-4 px-5 py-3 ">Location</td>
                  <td className="col p-md-4 px-5 py-3 text-center">
                    <i className="bi bi-plus-circle-fill text-white plus-icon bg-transparent fs-4 ms-2 cursor"
                      title="Add a new row"
                      onClick={addRole}
                    ></i>
                  </td>
                </thead>
                {formData.map((role, index) => (
                  <tr key={index} className={` job ${emptyFields[index].roleName ? 'has-error' : ''}`}>

                    <td className="col ps-4 pt-3">
                      <input
                        type="text"
                        name="roleName"
                        className={`form-control`}
                        placeholder="Role Name"
                        value={role.roleName}
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
                        type="number"
                        name="budget"
                        className="form-control"
                        min={0}
                        placeholder="Lpa"
                        value={role.budget}
                        onChange={(e) => handleInputChange(index, e)}
                        required
                      />
                    </td>
                    <td className="col ps-4 pt-3">
                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="Location"
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
  );
};

export default CandidateProfile;