import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Employer = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                AD
            </div>
            <div className='col-10'>
               
                        <Outlet/>
            </div>
        </div>

    </div>
  )
}

export default Employer