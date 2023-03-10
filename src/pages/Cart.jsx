import { useEffect, useRef } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import DefaultLayout from "../Layout/DefaultLayout";
import { useContext } from "react";
import { themeContext } from "../provider/ThemeProvider";
import Item from "antd/es/list/Item";
import { DeleteFilled } from "@ant-design/icons";

//cart section
const Cart = () => {
  const { theme, setTheme, Cart, setCart, AddToCart } =
    useContext(themeContext);
  const [Total, setTotal] = useState(0);

  const SubTotal = Cart.map((item) => {
    return item.Total;
  });

  const TotalSum = SubTotal.reduce((Total, value) => {
    return Math.round((Total + value) * 100) / 100;
  }, 0);

  //sum-up on every change
  useEffect(() => {
    setTotal(TotalSum);
    console.log(Total);
  }, [TotalSum]);

  //clear all cart
  const ClearChat = () => {
    setCart([]);
    localStorage.clear();
  };

  //remove cart by ID
  const RemoveCartItem = (id) => {
    let NewItem = Cart.filter((item) => item.id !== id);
    setCart(NewItem);
    localStorage.setItem("cartItem", JSON.stringify(NewItem));
  };

  //increase cart qty by ID
  const IncreaseCartQty = (id) => {
    let NewCart = Cart.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          Quantity: (item.Quantity += 1),
          Total: Math.round(item.price * item.Quantity * 100) / 100,
        };
      } else {
        return item;
      }
    });
    setCart(NewCart);
    localStorage.setItem("cartItem", JSON.stringify(NewCart));
  };

  //decrease cart qty by ID
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
      });
      setCart(NewCart);
      localStorage.setItem("cartItem", JSON.stringify(NewCart));
    }
  };

  // condition for empty cart
  if (Cart.length == 0) {
    return (
      <DefaultLayout>
        <div className="text-center">
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <h1 className="text-danger" style={{ fontSize: "60px" }}>
            OOps!!! <br />
            Cart is Empty.....
          </h1>
          <br />
          <br />
          <h3 className="text-danger">
            Click{" "}
            <button className="rounded bg-warning text-dark px-1">
              <Link
                to={"/products"}
                className="btn btn-link link-dark text-decoration-none text-dark fw-bold"
              >
                here
              </Link>
            </button>{" "}
            to list item to Cart
          </h3>
        </div>
      </DefaultLayout>
    );
  }

  // if cart is filled
  return (
    <DefaultLayout>
      <br />
      <br />
      <br />
      <br />
      <h3 className=" text-center p-3"> Cart Section</h3>
      <div className=" gap-3 mx-5 m-auto">
        {Cart.map((item) => (
          <div key={item?.id} className="contanier-fluid">
            <div
              key={item?.id}
              className={`my-4 contanier-fluid bg-${theme} card-body  p-4 mx-auto shadow-lg d-flex flex-wrap`}
              style={{ maxWidth: "550px" }}
            >
              <div className="text-center m-auto col-sm-5">
                <img
                  src={item?.image}
                  className="rounded"
                  style={{ width: "70px" }}
                  alt=""
                />{" "}
                <br />
                <br />
                <span className="fw-bold"> {item.title}</span>
              </div>{" "}
              <br />
              <div className="col-sm-7 text-center mx-auto mt-2">
                <div>
                  <span className="fw-bold">price :</span> <br />
                  <span className="my-4 fw-bold">
                    {" "}
                    ${Number(item?.price).toLocaleString()}
                  </span>
                  <br />
                </div>
                <div className="mt-3">
                  <span className="fw-bold">Quantity</span> <br />
                  <div className="mt-2">
                    <button
                      className=" bg-warning rounded text-dark fw-bold"
                      onClick={() => DecreaseCartQty(item?.id, item?.Quantity)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="mx-4 fw-bold ">{item.Quantity}</span>
                    <button
                      className=" bg-warning rounded text-dark fw-bold"
                      onClick={() => IncreaseCartQty(item?.id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="mt-4 d-flex flex-wrap justify-content-evenly">
                  <h5>Total: ${item.Total} </h5>
                  <span
                    className="ms-5 text-warning"
                    style={{
                      fontSize: "22px",
                      position: "relative",
                      top: "-13px",
                    }}
                    onClick={() => RemoveCartItem(item.id)}
                  >
                    <DeleteFilled />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" d-flex flex-wrap justify-content-around bg-warning p-2 w-75 mx-auto rounded shadow-lg">
        <button
          className="btn btn-dark text-warning rounded  my-auto fw-bold"
          style={{ width: "260px", height: "40px" }}
        >
          {" "}
          <h4>Sub-Total : ${Total}</h4>
        </button>
        <button
          className="btn btn-dark text-warning rounded btn-sm my-2 fw-bold "
          style={{ width: "120px", height: "40px" }}
          onClick={ClearChat}
        >
          Clear Cart
        </button>
      </div>{" "}
      <br />
      <br />
    </DefaultLayout>
  );
};

export default Cart;
