import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHamburger,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const isAdmin = true;

  return (
    <div className="flex mt-10 gap-8">
   
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="menu gap-4">
          {isAdmin ? (
            <>
             
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          <div className="divider"></div>
          {/* shared navlinks */}
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
          <li>
            <NavLink to="/orderFood/contact">
              <FaEnvelope></FaEnvelope> Contact
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
