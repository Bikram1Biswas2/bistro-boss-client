import { Outlet } from "react-router-dom";
import Footer from "../Home/Shared/Footer";


const MainLayOut = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;