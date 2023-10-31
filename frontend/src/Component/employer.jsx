import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo_new from "../assets/newlogo-1.png"


const Employer = ({ onAuthentication }) => {
  return (
    <div className='position-relative'>
      <div className='row g-0'>
        <nav className="navbar position-fixed top-0">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand" href="#">
              <img src={logo_new} className='logo' />
            </Link>
            <div className="" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to={'/'} className='btn btn-danger logout d-flex' onClick={() => onAuthentication(null)}>


                    <i class="bi bi-box-arrow-right d-block pe-2"></i>
                    Logout</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        <div className='col-2 d-none'>
          <video autoPlay muted loop>
            <source src='https://player.vimeo.com/external/481048436.sd.mp4?s=c9afc848a048019e3a0cd6019737eb50133efe4f&profile_id=165&oauth2_token_id=57447761'
            ></source>
          </video>
        </div>
        <div className='col-12'>
          <Outlet />
        </div>
      </div>
      <footer className='bg-black text-center text-white fw-semibold position-absolute bottom-0 w-100  fs-6 p-2 d-flex justify-content-between'>
          <p className='m-0'>Created by @Axess Technology</p> <Link to={'/'} className="navbar-brand ps-2" href="#">
            <img src={logo_new} className='logo' style={{ "height": "20px" }} />
          </Link>
        </footer>
    </div>


  )
}

export default Employer