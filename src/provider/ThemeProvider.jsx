import { List } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

//CONTENT
export const themeContext = createContext(null);

//COMPOSITE
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    // const [count, setCount] = useState(0)
    const [Cart, setCart] = useState(
        localStorage.getItem('cartItem') ?
            JSON.parse(localStorage.getItem('cartItem'))
            : []
    )


    const AddToCart = (Item) => {
        const newcart = [...Cart, { ...Item, Quantity: 1, Total: Item.price }]
        setCart(newcart);
        localStorage.setItem("cartItem", JSON.stringify(newcart));
    }

    console.log(Cart);

    const List = { theme, setTheme, Cart, setCart, AddToCart }


    return (
        <themeContext.Provider value={List}>
            {children}
        </themeContext.Provider>
    )

}

export default ThemeProvider;

