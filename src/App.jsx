import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { Rate } from "antd"
import DefaultLayout from "./Layout/DefaultLayout";
import useDate from "./hooks/useDate";
import { Link } from "react-router-dom";
// import { Rate } from "antd"





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

            <main className="container-fluid">
                <br /><br />
                <div className="text-center">
                    <h1 className="text-warning fw-bold">What our customers say</h1>
                    <p className="fw-bold">Over the years, we have been providing top-notch customer service for our delighted customers. We asked our customers to leave <br /> honest reviews about our company. Here’s what they had to say.</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center p-auto">
                    <div className="shadow-lg m-3 mx-4 px-3 pt-2" style={{ height: "290px", width: "400px" }}>
                        <h3 className="text-warning">Ahmed Quadri</h3>
                        <p> Rating : <Rate value={"4"} /></p>
                        <p>Great company & very quick to respond and offer really good advice. They showed me why my old website wasn't working for me. The new one they created has got so many leads I don't need to advertise anywhere else now. Definitely recommend!!!</p>
                    </div>
                    <div className="shadow-lg m-3 mx-4 px-3 pt-2" style={{ height: "290px", width: "400px" }}>
                        <h3 className="text-warning">Mr Francis Oluwaseun</h3>
                        <p> Rating : <Rate value={"5"} /></p>
                        <p>First class web design service, I cannot recommend them highly enough. They clearly understood what I was looking for and interpreted my brief precisely. They have an excellent structure for getting all the information from the client which takes away a lot of stress!!.</p>
                    </div>
                    <div className="shadow-lg m-3 mx-4 px-3 pt-2" style={{ height: "290px", width: "400px" }}>
                        <h3 className="text-warning">Cynthia Nsofor</h3>
                        <p> Rating : <Rate value={"3"} /></p>
                        <p>The guys at G2Net Nigeria are very helpful and knowledgeable. They have have been patient teaching me how to update my website and they have made the website look great!! - would recommend G2Net to anyone starting a new business and wanting to build a website.</p>
                    </div>
                    <div className="shadow-lg m-3 mx-4 px-3 pt-2" style={{ height: "290px", width: "400px" }}>
                        <h3 className="text-warning">Mr Emeka Oduwaye</h3>
                        <p> Rating : <Rate value={"3"} /></p>
                        <p>I can only praise them. They are the best web designers I have ever used. They continue to react to issues and queries even after they have been paid (which is unique in their industry).</p>
                    </div>
                    <div className="shadow-lg m-3 mx-4 px-3 pt-2" style={{ height: "290px", width: "400px" }}>
                        <h3 className="text-warning">Mrs Funmi Kuti</h3>
                        <p> Rating : <Rate value={"4"} /></p>
                        <p>Fantastic team of creative web designers. G2Net knows how to make a website look good and function - and they always go the extra mile with customer service and support.</p>
                    </div>
                    <div className="shadow-lg m-3 mx-4 px-3 pt-2" style={{ height: "290px", width: "400px" }}>
                        <h3 className="text-warning">Mr Adewale Ayuba</h3>
                        <p> Rating : <Rate value={"5"} /></p>
                        <p>An absolute joy to work with G2Net, our businesses have used them for a number of years now for all our website needs and we have always received a first class service and such a quick to response to any queries I... Read more</p>
                    </div>
                </div>

                <div className="text-center"> <br /><br />
                    <p className="fw-bold">Copyright © 2021 - 2070. All rights <br /> reserved</p> <br /><br />
                </div>
            </main>





        </DefaultLayout>
    )
}

export default App;
