import { useContext } from "react";
import Navbar from "../components/Navbar";
import DefaultLayout from "../Layout/DefaultLayout";
import { themeContext } from "../provider/ThemeProvider";
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react";



const Login = () => {
    const [location, setLocation] = useState("")
    const [geo, setGeo] = useState("")
    const state = useRef({ email: "", password: "" })

    const { theme, setTheme, setCart, AddToCart } = useContext(themeContext)


    const onlogin = (e) => {
        e.preventDefault()
        console.log(state.current);
    }

    // got a lot to fix here
    // const componentDidMount = async () => {
    //     if ("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition(async (position) => {
    //             try {
    //                 const response = await fetch(`https://eu1.locationiq.com/v1/reverse?key=pk.90436d02785eda1fe9d99d7e8e3148e7&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
    //                 const data = await response.json()
    //                 console.log(data);
    //                 setGeo(data?.display_name)
    //                 console.log(geo);
    //             } catch (error) {
    //                 setGeo([])
    //             }
    //             setLocation(
    //                 "Latitude is :" + position.coords.latitude + " " +
    //                 "Longitude is :" + position.coords.longitude
    //             );
    //             console.log(location);
    //         });
    //     } else {
    //         console.log("Not Available");
    //     }
    // }


    return (
        <DefaultLayout> <br /><br /><br /><br /><br />
            <main>
                <main className="w-50 mx-auto py-5">
                    <form onSubmit={onlogin} className="bg-warning p-3" >
                        <div className="mb-3">
                            <label className="form-label fw-bold text-dark">Email address</label>
                            <input type="text" placeholder="name@example.com" onChange={(e) => state.current.email = e.target.value} className={`form-control outline-warning border-0 text-warning bg-${theme}`} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold text-dark">Password</label>
                            <input type="password" onChange={(e) => state.current.password = e.target.value} className={`form-control outline-warning border-0 border-none text-warning bg-${theme}`} />
                        </div>
                        <button type="submit" className="btn btn-dark text-warning">Submit</button>
                    </form>
                </main>
                <main> <br /><br /><br /><br />
                    <div className="text-center text-warning"> <br /><br />
                        <p className="fw-bold">Copyright © 2021 - 2070. All rights <br /> reserved</p> <br /><br />
                    </div>
                </main>

            </main>




            {/* <main className="text-center">
                <button className="btn btn-warning" onClick={componentDidMount}>Check Location</button> <br /> <br />
                <p> Location is : {location}</p>
                <hp>{geo}</hp>
            </main> */}

        </DefaultLayout>
    )

}

export default Login;
