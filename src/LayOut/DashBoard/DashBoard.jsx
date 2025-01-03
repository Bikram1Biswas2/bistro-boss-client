import {
  FaAd,
  FaCalendar,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
  return (
    <div className="flex mt-10 gap-8">
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="menu gap-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart:({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <FaAd></FaAd> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <FaCalendar></FaCalendar> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderFood/dessert">
              <FaHamburger></FaHamburger> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
