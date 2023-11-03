import React, { useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import Bg from "./Bg";
import axios from "axios";

const CandidateProfile = () => {
  const [profile, Setprofile] = useState({
    TechStack: "",
    Experience: 0, 
    ExpectedCTC: 0,
    Location: "",
  });

  const Handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/candidatepost", profile)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-bg3 h-100vh px-3 overflow-hidden">
      <Bg />
      <div className="h-100vh employer_profile d-flex justify-content-center flex-column align-items-center">
        <h2 className="py-2 text-center text-light" style={{ fontFamily: "cursive" }}>
          Candidate Profile
        </h2>
        <p className="col-md-8 text-center text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          molestias eius magnam asperiores expedita explicabo ullam ducimus
          veniam dolorem, iusto praesentium rem eligendi deleniti, inventore
          voluptatibus consectetur modi quasi quos.
        </p>
        <Scroll />
      </div>
      <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
        <div className="opacity col-12 col-md-11 rounded-3 overflow-hidden pb-4">
          <div className="text-end m-4">
            <Link to={"/candidate_Status"} className="text-white text-decoration-none fw-semibold">
              view status <i className="bi bi-arrow-right" />
            </Link>
          </div>
          <form onSubmit={Handlesubmit}>
            <div className="table-responsive tab-height mb-3">
              <table className="w-100 table m-0 text-white">
                <thead className="labels text-capitalize text-center table-opacity rounded-top border-bottom">
                  <tr>
                    <th className="col p-md-4 px-5 py-3">Tech Stack</th>
                    <th className="col p-md-4 px-5 py-3">Experience</th>
                    <th className="col p-md-4 px-5 py-3">Expected CTC</th>
                    <th className="col p-md-4 px-5 py-3">Location</th>
                    <th className="col p-md-4 px-5 py-3"><i class="bi bi-plus-circle fs-5 ms-auto cursor"></i></th>
                    <th className="col p-md-4 px-5 py-3 text-center">
                      <i
                        className="bi bi-plus-circle-fill text-white plus-icon bg-transparent fs-4 ms-2 cursor"
                        title="Add a new row"
                      />
                    </th>
                  </tr>
                </thead>
                <tr>
                  <td className="col ps-4 pt-3">
                    <input
                      type="text"
                      name="TechStack"
                      className="form-control"
                      placeholder="Role Name"
                      value={profile.TechStack}
                      onChange={(e) =>
                        Setprofile((prevProfile) => ({
                          ...prevProfile,
                          TechStack: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td className="col ps-4 pt-3">
                    <input
                      type="number"
                      name="Experience"
                      className="form-control"
                      placeholder="Experience"
                      value={profile.Experience}
                      onChange={(e) =>
                        Setprofile((prevProfile) => ({
                          ...prevProfile,
                          Experience: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td className="col ps-4 pt-3">
                    <input
                      type="number"
                      name="ExpectedCTC"
                      className="form-control"
                      min={0}
                      placeholder="Lpa"
                      value={profile.ExpectedCTC}
                      onChange={(e) =>
                        Setprofile((prevProfile) => ({
                          ...prevProfile,
                          ExpectedCTC: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td className="col ps-4 pt-3">
                    <input
                      type="text"
                      name="Location"
                      className="form-control"
                      placeholder="Location"
                      value={profile.Location}
                      onChange={(e) =>
                        Setprofile((prevProfile) => ({
                          ...prevProfile,
                          Location: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td className="col-1 text-center p-3">
                    <span className="ms-2 text-danger bg-transparent">
                      <i
                        className="bi bi-trash-fill delete-icon cursor"
                        title="Delete hover the row"
                        style={{ fontSize: "20px" }}
                      />
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <button
              type="submit"
              className="btn btn-outline-light mx-auto d-block px-4 submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;


