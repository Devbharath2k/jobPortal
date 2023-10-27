import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Employer = ({onAuthentication}) => {
  return (
    <div>
        <div className='row '>
            <div className='text-center'><h2>welcome</h2></div>
           <div className='text-end'><button onClick={()=>onAuthentication(null)}>LogOut</button></div> 
        </div>
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