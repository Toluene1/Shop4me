import { useContext } from "react";
import Navbar from "../components/Navbar";
import DefaultLayout from "../Layout/DefaultLayout";
import { themeContext } from "../provider/ThemeProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Alert from "../components/Alert";

const Signup = () => {
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

  //hooks
  const createAcc = useRef({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //   const firstName = useRef(null);

  const SubmitUser = (e) => {
    e.preventDefault();
    let registeredUser = false;
    Store.map((store) => {
      //conditions
      if (store.email === createAcc.current.email) {
        return (registeredUser = true);
      }
    });

    if (registeredUser == true) {
      setalert(true);
      setalertMessage("user already exist, proceed to login");
    } else if (
      !createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.password
    ) {
      setalert(true);
      setalertMessage("email must include @");
    } else if (
      createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.password.length < 8
    ) {
      setalert(true);
      setalertMessage("password must be at least 8 characters");
    } else {
      let newStore = [...Store, { ...createAcc.current }];
      setStore(newStore);
      localStorage.setItem("users", JSON.stringify(newStore));
      setalert(true);
      setalertMessage("Registered successfully");
      let input = document.getElementsByTagName("input");
      for (let index = 0; index < input.length; index++) {
        input[index].value = "";
      }
      console.log(createAcc.current);
    }
  };

  const closeAlert = () => {
    setalert(false);
  };
  //   useEffect(() => {
  //     firstName.current.focus();
  //   }, []);

  return (
    <DefaultLayout>
      {" "}
      <br />
      <br />
      <br />
      <main>
        <main>
          <div className="text-center mt-5">
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            <h3 className="text-center text-warning">Create an Account</h3>
          </div>
        </main>
        <main className="w-50 mx-auto py-1">
          <form onSubmit={SubmitUser} className="bg-warning p-3">
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">First Name</label>
              <input
                required
                type="text"
                onChange={(e) => (createAcc.current.firstName = e.target.value)}
                className={`form-control outline-warning border-0 text-warning bg-${theme}`}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Last Name</label>
              <input
                required
                type="text"
                onChange={(e) => (createAcc.current.lastName = e.target.value)}
                className={`form-control outline-warning border-0 text-warning bg-${theme}`}
              />
            </div>
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
        </main>
        <main>
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

export default Signup;
