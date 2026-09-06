import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";


const Dashboard = () => {
    return (
        <div>
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart</NavLink></li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;