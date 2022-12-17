import { Link } from "react-router-dom";;
import React from 'react';
import { Component, useRef, useState } from "react";
import Products from "../pages/Products";
import { Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { themeContext } from "../provider/ThemeProvider";
import Cart from "../pages/Cart";

const Navbar = () => {

    const { theme, count, setTheme, Cart, AddToCart } = useContext(themeContext)

    const ChangeColor = () => {
        setTheme(prev => prev == 'light' ? 'dark' : 'light')
        theme == 'light'
            ? document.body.className = 'text-white bg-dark'
            : document.body.className = 'text-dark bg-light'
    }

    return (
        <nav className="navbar navbar-expand text-dark  bg-warning justify-content-between px-5 gap-4 fixed-top shadow">
            <div className=" col-sm-2" style={{ marginLeft: "-24px" }}><Link to={"/"} className='btn btn-link m-none link-dark text-decoration-none'><h2>Shop4me</h2></Link></div>

            <div className="mx-2 col-sm-7 d-none d-sm-block text-center ">
                <button className={`btn btn-light mx-3 p-0 text-white bg-${theme}`}><Link to={"/"} className='btn btn-link link-dark text-decoration-none text-warning fw-bold'>Home</Link></button>
                <button className={`btn btn-light mx-3 p-0 text-white bg-${theme}`}><Link to={"/login"} className='btn btn-link link-dark text-decoration-none text-warning fw-bold'>Login</Link></button>
                <button className={`btn btn-light mx-3 p-0 text-white bg-${theme}`}><Link to={"/products"} className='btn btn-link link-dark text-decoration-none text-warning fw-bold'>Products</Link></button>
            </div>
            <div className="col-sm-1">
                <Link to={"/cart"} className='btn btn-link link-dark text-decoration-none  text-dark'><button type="button" style={{ height: "40px" }} className="btn btn-warning position-relative">
                    <span style={{ fontSize: "37px", position: "relative", top: "-25px" }}><ShoppingCartOutlined /></span> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black text-warning">{Cart.length}</span>
                </button></Link>
            </div>
            <div className="col-sm-1">
                <button className={`m-2 mx-3 px-2 btn btn-light text-warning bg-${theme}`} onClick={ChangeColor}>{
                    `${theme}` == 'light' ? 'dark' : 'light'}</button>
            </div>
        </nav >
    )
}

export default Navbar;