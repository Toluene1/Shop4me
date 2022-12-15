import { useContext } from "react";
import Navbar from "../components/Navbar";
import DefaultLayout from "../Layout/DefaultLayout";
import { themeContext } from "../provider/ThemeProvider";
import { useState } from "react"
import { useEffect } from "react";



const Login = () => {
    const [location, setLocation] = useState("")
    const [geo, setGeo] = useState("")

    // got a lot to fix here
    const componentDidMount = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                try {
                    const response = await fetch(`https://eu1.locationiq.com/v1/reverse?key=pk.90436d02785eda1fe9d99d7e8e3148e7&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
                    const data = await response.json()
                    console.log(data);
                    setGeo(data?.display_name)
                    console.log(geo);
                } catch (error) {
                    setGeo([])
                }
                setLocation(
                    "Latitude is :" + position.coords.latitude + " " +
                    "Longitude is :" + position.coords.longitude
                );
                console.log(location);
            });
        } else {
            console.log("Not Available");
        }


        // console.log(geo);

    }


    return (
        <DefaultLayout> <br /><br /><br /><br /><br />
            <main className="text-center">
                <button className="btn btn-warning" onClick={componentDidMount}>Check Location</button> <br /> <br />
                <h2> Location is : {location}</h2>
                <h2>{geo}</h2>
            </main>

        </DefaultLayout>
    )

}

export default Login;
