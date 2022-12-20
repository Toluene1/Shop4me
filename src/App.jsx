import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { Rate } from "antd"
import DefaultLayout from "./Layout/DefaultLayout";
import useDate from "./hooks/useDate";
import { Link } from "react-router-dom";




function App() {
    const ref = useRef(null);

    const Date = useDate()



    return (

        <DefaultLayout className=" mx-auto" >
            <br /><br /> <br />
            {/* <h1>{Date}</h1> */}
            <main className="container-fluid"> <br /><br />
                <div className="row" >
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 mt-5">
                        <h3 className="text-warning fw-bold mb-5 mt-3"> Why Shop4me is committed to satisfaction!!!</h3>
                        <h5 className="mt-3 mb-5" >Knowing that diverse teams can improve their cuatomer's <br /> shopping experience, our top teams are putting in place dedicated <br /> inclusion programs. <br /><br />
                            Here’s an overview of our products products, highlighting our what we’re doing to promote diversity in the e-commerce space.</h5>
                        <button className="mt-3 w-75 fw-bold rounded text-dark btn btn-warning"><Link to={"/products"} className='btn btn-link link-dark text-decoration-none text-dark fw-bold'>Explore Our Products</Link></button>
                    </div>
                    <div className=" col-sm-5 text-center my-auto p-2" style={{ height: "520px" }}> <br />
                        <img className="m-auto mt-5" src={"https://www.g2netnigeria.com/wp-content/uploads/2021/01/premium-eCommerce-Website-Development.png"} style={{ maxWidth: "320px", maxHeight: "320px", borderRadius: "30%" }} alt="" />
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </main>

            <main className="container-fluid">
                <div className="row"  >
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 mt-5 text-center">
                        <h3 className="text-warning fw-bold mb-5 mt-1"> Our Vision</h3>
                        <h5 className="mt-1 mb-5" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, similique, reiciendis veritatis nulla magnam accusamus soluta quam dolore debitis voluptate, ad fuga! Voluptas tempora quo,
                            labore soluta vitae impedit quas,</h5>
                    </div>
                    <div className=" col-sm-5 text-center my-auto p-2"> <br />
                        <img className="m-auto" src={"https://www.g2netnigeria.com/wp-content/uploads/2021/01/successful-website-design.png"} style={{ maxWidth: "320px", maxHeight: "320px", borderRadius: "30%" }} alt="" />
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </main>





        </DefaultLayout>
    )
}

export default App;
