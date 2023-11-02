import React from 'react';
import "./EmployerReg.css";

function EmployerReg() {
  return (
    <div id='EmployerReg'>
    <div className="container Register my-2 mt-3" id="EMployer">
      <div className="text">Employer Register form</div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className=""></div>
            <label htmlFor="" className=''>First Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="email" required />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Current company</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="email" required />
            <div className="underline"></div>
            <label htmlFor="">Current CTC</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Total Experience</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="number" required />
            <div className="underline"></div>
            <label htmlFor="">Phone Number</label>
          </div>
          <div className="input-data">
            <input type="password" required />
            <div className="underline"></div>
            <label htmlFor="">Password</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <div className="form-row submit-btn justify-content-center align-items-center">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div> 
  );
}

export default EmployerReg;