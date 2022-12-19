import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Products from './pages/Products';
import 'antd/dist/reset.css';
import Productview from './pages/Productview';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import ThemeProvider from './provider/ThemeProvider';
import Cart from './pages/Cart';
// import "./app.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:pid",
    element: <Productview />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
// ReactDOM.render(  <App />,document.getElementById('root'))