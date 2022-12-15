import { useEffect, useRef } from "react";
import { useState } from "react"
import Navbar from "../components/Navbar";
import { Rate } from "antd"
import { Link } from "react-router-dom";
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import DefaultLayout from "../Layout/DefaultLayout";
import { useContext } from "react";
import { themeContext } from "../provider/ThemeProvider";
import Item from "antd/es/list/Item";

const Cart = () => {

    const { theme, setTheme, Cart, setCart, AddToCart } = useContext(themeContext)
    const [Total, setTotal] = useState(0)

    const SubTotal = Cart.map((item) => {
        return item.Total
    });

    const TotalSum = SubTotal.reduce((Total, value) => {
        return Math.round((Total + value) * 100) / 100;
    }, 0)

    useEffect(() => {
        setTotal(TotalSum)
        console.log(Total);
    }, [TotalSum])

    const ClearChat = () => {
        setCart([])
        localStorage.clear()
    }

    const RemoveCartItem = (id) => {
        let NewItem = Cart.filter((item) => item.id !== id);
        setCart(NewItem)
        localStorage.setItem("cartItem", JSON.stringify(NewItem))
    }

    const IncreaseCartQty = (id) => {
        let NewCart = Cart.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    Quantity: (item.Quantity += 1),
                    Total: Math.round(item.price * item.Quantity * 100) / 100,
                }
            } else {
                return item;
            }
        })
        setCart(NewCart)
        localStorage.setItem("cartItem", JSON.stringify(NewCart))
    }

    const DecreaseCartQty = (id, quantity) => {
        if (quantity > 1) {
            let NewCart = Cart.map((item) => {
                if (item.id == id) {
                    return {
                        ...item,
                        Quantity: (item.Quantity -= 1),
                        Total: Math.round(item.price * item.Quantity * 100) / 100,
                    };
                } else {
                    return item;
                }
            })
            setCart(NewCart)
            localStorage.setItem("cartItem", JSON.stringify(NewCart))
        }
    }


    if (Cart.length == 0) {
        return (
            <DefaultLayout>
                <div className="text-center">
                    <br /><br /><br /><br /> <br /><br />
                    <h1 className="text-danger" style={{ fontSize: "60px" }}>OOps!!! <br />Cart is Empty.....</h1>
                    <br /><br />
                    <h3 className="text-danger">Click <button className="rounded bg-warning text-dark px-3"><Link to={"/products"} className='btn btn-link link-dark text-decoration-none text-dark fw-bold'>here</Link></button> to list item to Cart</h3>
                </div>
            </DefaultLayout >
        )
    }


    return (
        <DefaultLayout>
            <br /><br /><br /><br />
            <h3 className=" text-center p-3"> Cart Section</h3>
            <div className=" gap-3 mx-5 m-auto">
                {Cart.map(item =>
                    <div className="contanier-fluid">
                        <div key={item?.id} className={`my-4 contanier-fluid bg-${theme} card-body  p-4 mx-auto shadow-lg d-flex flex-wrap`} style={{ maxWidth: "550px" }}>
                            <div className="text-center m-auto col-sm-5">
                                <img src={item?.image} className="rounded" style={{ width: "70px" }} alt="" /> <br /><br />
                                <span className="fw-bold"> {item.title}</span>
                            </div> <br />
                            <div className="col-sm-7 text-center mx-auto mt-2">
                                <div>
                                    <span className="fw-bold">price :</span> <br />
                                    <span className="my-4 fw-bold"> ${Number(item?.price).toLocaleString()}</span>
                                    <br />
                                </div>
                                <div className="mt-3">
                                    <span className="fw-bold">Quantity</span> <br />
                                    <div className="mt-2">
                                        <button className=" bg-warning rounded text-dark fw-bold" onClick={() => DecreaseCartQty(item?.id, item?.Quantity)}> - </button>
                                        <span className="mx-4 fw-bold ">{item.Quantity}</span>
                                        <button className=" bg-warning rounded text-dark fw-bold" onClick={() => IncreaseCartQty(item?.id)}> + </button>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex flex-wrap justify-content-evenly">
                                    <h5>Total: ${item.Total} </h5>
                                    <button className="ms-5" onClick={() => RemoveCartItem(item.id)}>rv</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className=" d-flex justify-content-around">
                <h1 className="my-auto">Sub-Total : ${Total} </h1>
                <button className="bg-danger text-white rounded btn-sm my-auto" style={{ width: "60px", height: '40px' }} onClick={ClearChat}>Clear</button>
            </div>
        </DefaultLayout >
    )
}

export default Cart;