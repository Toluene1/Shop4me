import { List } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

//CONTENT
export const themeContext = createContext(null);

//COMPOSITE
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const [Cart, setCart] = useState(
    localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : []
  );
  const [Store, setStore] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const AddToCart = (Item) => {
    const newcart = [...Cart, { ...Item, Quantity: 1, Total: Item.price }];
    setCart(newcart);
    localStorage.setItem("cartItem", JSON.stringify(newcart));
  };

  console.log(Cart);

  const List = {
    theme,
    setTheme,
    Cart,
    setCart,
    AddToCart,
    Store,
    setStore,
    alert,
    setalert,
    alertMessage,
    setalertMessage,
  };

  return <themeContext.Provider value={List}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
