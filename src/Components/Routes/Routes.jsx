import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home/Home";
import MainLayOut from "../MainLayOut/MainLayOut";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../../LayOut/DashBoard/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <h2>404 not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "orderFood/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ],
  },
  {
    path:'dashboard',
    element:<DashBoard></DashBoard>,
    errorElement:<h2>404 not found</h2>,
    children:[
      {
         path:'cart',
         element:<Cart></Cart>
      }
    ]
  }
]);
