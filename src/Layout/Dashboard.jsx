import { FaCalendarAlt, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservations">
                            <FaCalendarAlt /> Reservations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart /> My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking">
                            <FaList /> My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/dashboard/home">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch /> Order Food
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;