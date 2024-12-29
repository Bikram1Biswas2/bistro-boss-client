import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home/Home";
import MainLayOut from "../MainLayOut/MainLayOut";
import OurMenu from "../Pages/OurMenu/OurMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<h2>404 not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'ourMenu',
          element:<OurMenu></OurMenu>
        }
    ]
  },
]);
