import React from 'react'
import "./Login.css"
import Logo from "../../assets/logo2.png"
export default function Login() {
    return (
        <div className='col-8 mx-auto py-5 main' style={{ "height": "100vh" }}>
            <div className='row login  h-100' >
                <div className=' text-black rounded-start-3 col-md-6 bg-white h-100 align-items-center d-flex flex-column justify-content-center position-relative'>
                    <img className='logonew d-none' src={Logo} />
                    <p className='mb-0 logonew1'>HIRE-IT</p>
                    <form>
                        <h3 className='mb-3 text-primary'>Candidate Login</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control shadow-none border border-0 border-bottom border-dark rounded-0"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label mb-0">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control shadow-none border border-0 border-bottom border-dark rounded-0"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input shadow-none" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary shadow-none">
                            Submit
                        </button>
                    </form>

                </div>
                <div className='rounded-end-3 col-md-6 text-white h-100 align-items-center d-flex flex-column justify-content-center' style={{ background: "#4835d4" }}>
                    <form>
                        <h3 className='mb-3'>Requriters Login</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label mb-0">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control shadow-none border border-0 border-bottom border-white rounded-0"
                                id="exampleInputEmail2"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text text-white">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label mb-0">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control shadow-none border border-0 border-bottom border-white rounded-0"
                                id="exampleInputPassword2"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input shadow-none" id="exampleCheck2" />
                            <label className="form-check-label" htmlFor="exampleCheck2">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-light shadow-none">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
