import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Employer = () => {
  return (
    <div>
        <div className='row g-0'>
            <div className='col-2'>
                <video autoPlay muted loop>
                  <source src='https://player.vimeo.com/external/481048436.sd.mp4?s=c9afc848a048019e3a0cd6019737eb50133efe4f&profile_id=165&oauth2_token_id=57447761'
                  ></source>
                </video>
            </div>
            <div className='col-10'>
               
                        <Outlet/>
            </div>
        </div>

    </div>
  )
}

export default Employer