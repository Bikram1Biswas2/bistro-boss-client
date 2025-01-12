import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home/Home";
import MainLayOut from "../MainLayOut/MainLayOut";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../../LayOut/DashBoard/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../../LayOut/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

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
      // normal user route
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
         path:'cart',
         element:<Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      // admin only routes
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'allUsers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }

    ]
  }
]);
