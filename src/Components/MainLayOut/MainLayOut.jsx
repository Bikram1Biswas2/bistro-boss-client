import { Outlet } from "react-router-dom";
import Footer from "../Home/Shared/Footer";
import Navbar from "../Home/Shared/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;