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
import axios from "axios";
import http from "../Config/http";
import "animate.css";

const Products = () => {
  //hooks
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Category, setCategory] = useState([]);
  let isMounted = true;

  const { theme, setTheme, setCart, AddToCart } = useContext(themeContext);

  //loads products
  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const response = await http.get("/products");
        setProducts(response.data);
        setCategory(response.data);
        setLoading(false);
      } catch (error) {
        setProducts([]);
      }
    };

    //conditions
    if (isMounted) FetchProducts();
    return () => {
      isMounted = false;
    };
    localStorage.setItem("Products", JSON.stringify(Products));
  }, []);

  // spinner section
  if (Loading) {
    return (
      <div className="text-center my-5">
        <span className="spinner-border"></span>
        <h3>Loading Page</h3>
      </div>
    );
  }

  //category section
  const AllCategory = () => {
    setCategory(Products);
    console.log(Products);
  };
  const Men = () => {
    let MenCategory = Products.filter((p) => p.category === "men's clothing");
    setCategory(MenCategory);
    console.log(Category);
  };

  const Women = () => {
    let WomenCategory = Products.filter(
      (p) => p.category === "women's clothing"
    );
    setCategory(WomenCategory);
    console.log(Category);
  };
  const Jewelry = () => {
    let JewelryCategory = Products.filter((p) => p.category === "jewelery");
    setCategory(JewelryCategory);
    console.log(Category);
  };
  const Electronics = () => {
    let ElecCategory = Products.filter((p) => p.category === "electronics");
    setCategory(ElecCategory);
    console.log(Category);
  };

  return (
    <DefaultLayout>
      {" "}
      <br />
      <br />
      <br /> <br />
      <main class="animate__animated animate__fadeInLeft">
        <Link to={"/"} className={`btn btn-warning mx-2`}>
          <h5 className="m-1 mx-2">Back Home</h5>
        </Link>
        <h1 className=" text-center p-3"> Products from FakeStore</h1>
        <div className="text-center">
          <button
            className="btn btn-warning px-4 mx-4 m-1"
            onClick={AllCategory}
          >
            All Products
          </button>
          <button className="btn btn-warning px-4 mx-4 m-1" onClick={Men}>
            Men's Clothing
          </button>
          <button className="btn btn-warning px-4 mx-4 m-1" onClick={Women}>
            {" "}
            Women's Clothing
          </button>
          <button className="btn btn-warning px-4 mx-4 m-1" onClick={Jewelry}>
            Jewelry
          </button>
          <button
            className="btn btn-warning px-4 mx-4 m-1"
            onClick={Electronics}
          >
            Electronics
          </button>
        </div>
        <div>
          {!Loading && Category.length > 0 && (
            <div className="d-flex gap-3 flex-wrap mx-5 m-auto">
              {Category.map((item) => (
                <div
                  key={item?.id}
                  className={`my-4 card border-warning card-body bg-${theme} shadow-lg rounded `}
                  style={{ width: "18rem" }}
                >
                  <div className="text-center">
                    <img
                      src={item?.image}
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "30%",
                      }}
                      alt=""
                    />
                  </div>{" "}
                  <br />
                  <h5>{item?.title}</h5>
                  <h5> ${Number(item?.price).toLocaleString()}</h5>
                  {/* <p className="small">{item?.description}</p> */}
                  <div className="mt-auto">
                    <h5>
                      {" "}
                      Rating : <Rate value={item?.rating?.rate} />
                    </h5>
                    <Link
                      to={`/products/ ${item?.id} `}
                      className="btn btn-warning"
                    >
                      View Produts
                    </Link>
                    <button
                      className="btn btn-warning mx-2 my-2"
                      onClick={() => AddToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!Loading && Category.length == 0 && (
            <div className="alert alert-warning text-center">
              <h1>Coming Soon...</h1>
              <br />
              <span className="spinner-border"></span>
            </div>
          )}
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Products;
