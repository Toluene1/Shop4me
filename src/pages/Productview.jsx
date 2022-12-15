import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";
import { Rate } from "antd"
import { Link } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";
import { useContext } from "react";
import { themeContext } from "../provider/ThemeProvider";
import Navbar from "../components/Navbar";
import axios from "axios";
import http from "../Config/http";



const Productview = () => {
    const [Products, setProducts] = useState({})
    const [Loading, setLoading] = useState(true)
    let isMounted = true;

    const param = useParams();
    const { theme, setTheme, AddToCart, setCart } = useContext(themeContext)


    useEffect(() => {
        const FetchProducts = async () => {
            try {
                const response = await http.get(`/products/${param.pid}`)
                setProducts(response.data)
                setLoading(false)
            } catch (error) {
                setProducts([])
            }
        }

        if (isMounted) FetchProducts();
        return () => {
            isMounted = false;
        }
    }, [])
    return (
        <DefaultLayout> <br /><br /><br />
            <Link to={"/products"} className={`btn btn-warning m-2 text-black link-${theme}`}><h5 className="m-1 mx-2">Back to Product Page</h5></Link>
            {Loading == true &&
                <div className="text-center m-auto">
                    <span className="spinner-border"></span>
                    <h3>Loading Page</h3>
                </div>
            }

            {!Loading &&
                <div className="contanier-fluid">
                    <h3 className=" text-center p-3"> Product Description</h3>
                    <div key={Products?.id} className={`my-4 contanier-fluid bg-${theme} card-body w-50  p-4 mx-auto shadow-lg d-flex flex-wrap`}>
                        <div className="text-center my-auto col-sm-4">
                            <img src={Products?.image} style={{ width: "170px" }} alt="" />
                        </div> <br />
                        <div className="col-sm-8 p-2">
                            <h5>{Products?.title}</h5>
                            <h5>{Products?.category}</h5>
                            <h5> ${Number(Products?.price).toLocaleString()}</h5>
                            <p className="small">{Products?.description}</p>
                            <div className="mt-auto">
                                <p> Rating : <Rate value={Products?.rating?.rate} />  <span>Count :{Products?.rating?.count}</span> </p>
                                <button className="btn btn-warning shadow" onClick={() => AddToCart(Products)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* {<h1> PID {param.pid} </h1> */}
        </DefaultLayout>
    )
}

export default Productview;