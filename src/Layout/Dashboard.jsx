import { FaCalendarAlt, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();
    // get admin value from databae
    const { isAdmin } = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItem">
                                    <FaUtensilSpoon /> Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adminReservations">
                                    <FaCalendarAlt /> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUser /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/">
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
                        </>
                    )}

                    {/* common links for both admin and user */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope /> Contact
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