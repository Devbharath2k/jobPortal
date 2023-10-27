import React from "react";
import { Outlet } from "react-router-dom";

const Candidate = ({ onAuthentication }) => {
  return (
    <div>
      <div className="row ">
        <div className="text-center">
          <h1>welcome</h1>
        </div>
        <div className="text-end">
          <button onClick={() => onAuthentication(null)}>LogOut</button>
        </div>
      </div>
      <div className="row">
        <div className="col-2">AD</div>
        <div className="col-8">
          <Outlet />
        </div>
        <div className="col-2">AD</div>
      </div>
    </div>
  );
};

export default Candidate;
