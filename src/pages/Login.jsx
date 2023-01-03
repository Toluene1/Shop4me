import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DefaultLayout from "../Layout/DefaultLayout";
import { themeContext } from "../provider/ThemeProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Alert from "../components/Alert";

const Login = () => {
  //hooks
  const [geo, setGeo] = useState("");
  const state = useRef({ email: "", password: "" });
  //   const email = useRef(null);

  const {
    theme,
    setTheme,
    setCart,
    AddToCart,
    Store,
    setStore,
    alert,
    setalert,
    alertMessage,
    setalertMessage,
  } = useContext(themeContext);

  const createAcc = useRef({
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     email.current.focus();
  //   });

  const onlogin = (e) => {
    e.preventDefault();
    let isregisteredUser = false;
    console.log(Store);
    Store.map((Store) => {
      //conditions
      if (
        Store.email === createAcc.current.email &&
        Store.password === createAcc.current.password
      ) {
        isregisteredUser = true;
      }
    });

    if (isregisteredUser == true) {
      setalert(true);
      setalertMessage("login successful");
      let input = document.getElementsByTagName("input");
      for (let index = 0; index < input.length; index++) {
        input[index].value = "";
      }
    } else {
      setalert(true);
      setalertMessage("user does not exist, sign up instead");
    }

    if (!createAcc.current.email.includes("@")) {
      setalert(true);
      setalertMessage("email must include @");
    } else if (createAcc.current.password.length < 8) {
      setalert(true);
      setalertMessage("password must be at least 8 characters");
    }
  };

  const closeAlert = () => {
    setalert(false);
  };

  return (
    <DefaultLayout>
      {" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <main>
        <main>
          <div className="text-center mt-5">
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            <h3 className="text-center text-warning">Login Account</h3>
          </div>
        </main>
        <main className="w-50 mx-auto py-5">
          <form onSubmit={onlogin} className="bg-warning p-3">
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">
                Email address
              </label>
              <input
                required
                type="text"
                placeholder="name@example.com"
                onChange={(e) => (createAcc.current.email = e.target.value)}
                className={`form-control outline-warning border-0 text-warning bg-${theme}`}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Password</label>
              <input
                required
                type="password"
                onChange={(e) => (createAcc.current.password = e.target.value)}
                className={`form-control outline-warning border-0 border-none text-warning bg-${theme}`}
              />
            </div>
            <button type="submit" className="btn btn-dark text-warning">
              Submit
            </button>
          </form>
          <div>
            <p className="text-center text-warning fw-bold">
              dont have an account? <br />
              <li className="list-group-item">
                <Link
                  to={"/signup"}
                  className="btn btn-link link-dark text-decoration-none text-warning"
                  style={{ marginTop: "-7px" }}
                >
                  <span className="text-warning fw-bold">Create one ..</span>
                </Link>
              </li>
            </p>
          </div>
        </main>
        <main>
          {" "}
          <br />
          <br />
          <br />
          <br />
          <div className="text-center text-warning">
            {" "}
            <br />
            <br />
            <p className="fw-bold">
              Copyright © 2021 - 2070. All rights <br /> reserved
            </p>{" "}
            <br />
            <br />
          </div>
        </main>
      </main>
    </DefaultLayout>
  );
};

export default Login;
