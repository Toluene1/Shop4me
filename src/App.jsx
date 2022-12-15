import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { Rate } from "antd"
import DefaultLayout from "./Layout/DefaultLayout";
import useDate from "./hooks/useDate";



function App() {
    const ref = useRef(null);

    const Date = useDate()



    return (

        <DefaultLayout className=" mx-auto py-5">



            <br /><br /> <br /><br />
            <h1>{Date}</h1>
            {/* <h1>Need to fill</h1> */}





        </DefaultLayout>
    )
}

export default App;
