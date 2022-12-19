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
            <br /><br /> <br />
            {/* <h1>{Date}</h1> */}
            <main className=" d-flex flex-wrap" style={{ height: "600px", marginTop: "0px" }}>
                <div className="bg-dark col-sm-6 " style={{ height: "560px" }}>
                    <h2 className="text-warning m-5 fw-bold"> Why Shop4me is committed to neurodiversity</h2>
                    <h5 className="text-white fw-bold m-5">Knowing that neurodiverse teams can improve their business performance, today’s leading companies are putting in place dedicated inclusion programs.</h5>
                    <h5 className="text-white fw-bold m-5">Here’s an overview of Orange’s actions, highlighting our what we’re doing to promote neurodiversity in the workplace.</h5>
                </div>
                <div className="bg-success col-sm-6" style={{ height: "560px" }}>
                    <h1>Tolu</h1>
                    <h1 className="text-warning"> Why Orange is committed to neurodiversity</h1>

                </div>
            </main>






        </DefaultLayout>
    )
}

export default App;
