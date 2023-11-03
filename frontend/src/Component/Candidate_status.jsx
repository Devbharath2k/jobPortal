import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bg from './Bg';
import Scroll from './Scroll';
import axios from "axios";

const CandidateStatus = () => {
  const [values, setValues] = useState([]);

  const handleAxios = () => {
    axios
      .get("http://localhost:4000/api/candidategetting")
      .then(res => {
        console.log(res.data.data);
        setValues(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleAxios();
  }, []);

  return (
    <div className="">
      <div className="main-bg3 h-100vh px-3 overflow-hidden">
        <Bg />
        <div className="h-100vh employer_profile d-flex justify-content-center flex-column align-items-center">
          <h2 className="py-2 text-center text-light" style={{ fontFamily: "cursive" }}>Employer Status</h2>
          <p className="col-md-8 text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias eius magnam asperiores expedita explicabo ullam ducimus veniam dolorem, iusto praesentium rem eligendi deleniti, inventore voluptatibus consectetur modi quasi quos.
          </p>
          <Scroll />
        </div>
        <div className="h-100vh d-flex justify-content-center flex-column align-items-center">
          <div className="opacity col-12 col-md-11 rounded-3 overflow-hidden pb-4">
            <div className="text-end m-4">
              <Link to={"/"} className="text-light text-decoration-none fw-semibold">
                Add Jobs <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="table-responsive tab-height">
              <table className="w-100 table m-0 text-white">
                <thead className="labels text-capitalize text-white text-center table-opacity rounded-top border-bottom">
                  <tr>
                    <td className="col p-md-4 px-4 py-3 ">S.No</td>
                    <td className="col p-md-4 px-4 py-3 "> Role Name</td>
                    <td className="col p-md-4 px-4 py-3 ">Openings</td>
                    <td className="col p-md-4 px-4 py-3 ">Company Name</td>
                    <td className="col p-md-4 px-4 py-3 ">Status</td>
                    <td className="col p-md-4 px-4 py-3 ">Edit</td>
                  </tr>
                </thead>
                <tbody>
                  {values.map((item, index) => (
                    <tr key={index} className={`job text-center`}>
                      <td className="col p-3">{index + 1}</td>
                      <td className="col p-3">{item.role}</td>
                      <td className="col p-3">{item.openings}</td>
                      <td className="col p-3">{item.company_name}</td>
                      <td className="col p-3">{item.status}</td>
                      <td className='col'>
                        <Link to={`/Read/${item._id}`} className="btn btn-info">
                          Read
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateStatus;