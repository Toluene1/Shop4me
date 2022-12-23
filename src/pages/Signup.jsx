import { useContext } from "react";
import Navbar from "../components/Navbar";
import DefaultLayout from "../Layout/DefaultLayout";
import { themeContext } from "../provider/ThemeProvider";
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react";


const Signup = () => {
    const { theme, setTheme, setCart, AddToCart } = useContext(themeContext)

    const createAcc = useRef({ firstName: "", lastName: "", age: "", email: "", password: "" })


    const onlogin = (e) => {
        e.preventDefault()
        console.log(createAcc.current);
    }


    
    return (
        < DefaultLayout > <br /><br /><br />
            <main>
                <main className="w-50 mx-auto py-5">
                    <form onSubmit={onlogin} className="bg-warning p-3" >
                        <div className="mb-3">
                            <label className="form-label fw-bold text-dark">First Name</label>
                            <input type="text" onChange={(e) => createAcc.current.firstName = e.target.value} className={`form-control outline-warning border-0 text-warning bg-${theme}`} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold text-dark">Last Name</label>
                            <input type="text" onChange={(e) => createAcc.current.lastName = e.target.value} className={`form-control outline-warning border-0 text-warning bg-${theme}`} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-evenly">
                            <div>
                                <label className="form-label fw-bold text-dark">Gender : </label>
                                <select name="Gender" id="" className={`w-50 ms-2 p-1 px-1 rounded text-warning outline-0 border-0 bg-${theme}`}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="d-flex flex-wrap align-center ms-5">
                                <label className="form-label fw-bold text-dark">Age</label>
                                <input type="date" onChange={(e) => createAcc.current.age = e.target.value} className={`form-control ms-4 w-50 outline-warning border-0 text-warning bg-${theme}`} />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold text-dark">Email address</label>
                            <input type="text" placeholder="name@example.com" onChange={(e) => createAcc.current.email = e.target.value} className={`form-control outline-warning border-0 text-warning bg-${theme}`} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold text-dark">Password</label>
                            <input type="password" onChange={(e) => createAcc.current.password = e.target.value} className={`form-control outline-warning border-0 border-none text-warning bg-${theme}`} />
                        </div>
                        <button type="submit" className="btn btn-dark text-warning">Submit</button>
                    </form>
                </main>
                <main>
                    <div className="text-center text-warning"> <br /><br />
                        <p className="fw-bold">Copyright © 2021 - 2070. All rights <br /> reserved</p> <br /><br />
                    </div>
                </main>

            </main>
        </DefaultLayout >
    )

}

export default Signup;