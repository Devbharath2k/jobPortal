import React from "react";
// import { Link } from "react-router-dom";
 import "../Style/employer_profile.css"

const Employer_profile = () => {
  return (
    <div id="employer_profile" className="employer_profile pt-5">
      <div className="container-fluid">
        <p className="text-center justify-content-center display-6">
          Employer Profile
        </p>
        <div className="row my-5 justify-content-center">
          <div className=" col-md-10 card">
            <div className="card-body text-center">
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Role Name
                  </label>
                </div>
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Number of openings
                  </label>
                </div>
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Budget
                  </label>
                </div>
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Experiance
                  </label>
                </div>
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Availability
                  </label>
                </div>
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Location
                  </label>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col">
                  <input
                    type="text"
                    name="Role Name"
                    className="form-control"
                    placeholder="Role Name"
                    id=""
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="Number of openings"
                    className="form-control"
                    min={"0"}
                    placeholder="1 "
                    id=""
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="Budget"
                    className="form-control"
                    placeholder="CTC"
                    min={"0"}
                    id=""
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="Budget"
                    className="form-control"
                    placeholder="YRS"
                    min={"0"}
                    id=""
                  />
                </div>

                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DAYS"
                    name=""
                  />
                </div>
                <div className="col-md-2 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="location"
                    name=""
                  />
                  <span className="ms-2 "><i class="bi bi-trash-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 card"></div>
        </div>
      </div>
    </div>
  );

  {
    /* <div className="row justify-content-center mt-3">
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Candidate Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="krishna" id=""/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Role</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Testing</option>
                                <option value="1">2year</option>
                                <option value="2">3year</option>
                                <option value="3">5+year</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="datetime-local" name="date" className="form-control" placeholder="Budget" id=""/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Status</label>
                            <input type="text" name="closed" placeholder="L1 Completed" id=""/>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">command</label>
                            <input type="text" className="form-control" placeholder="Review" name="Experiance"/>
                        </div>
                        <div>
                            <button className="btn btn-primary mt-3">Submit</button>
                        </div>
                    </div> */
  }

  {
    /* <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Availability</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>immediate</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Location</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>chennai</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div> */
  }
  {
    /* <div className="row justify-content-center mt-3">
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Name of roles</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Devops</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">Devops</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">No of openings </label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>3 </option>
                                <option value="1">2year</option>
                                <option value="2">3year</option>
                                <option value="3">5+year</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Budget</label>
                            <input type="number" name="number" className="form-control" placeholder="Budget" id=""/>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Experiance</label>
                            <input type="number" className="form-control" placeholder="3+" name="Experiance"/>
                        </div>

                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Availability</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>immediate</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="exampleFormControlInput1" className="form-label">Location</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>chennai</option>
                                <option value="1">Banglore</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Triuvandaran</option>
                            </select>
                        </div> 
                </div> */
  }
};

export default Employer_profile;
