import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);
    const [carts] = useCart();

    const handleLogout = () => {
        logOut()
        .then(() => {
            // Handle successful logout, e.g., redirect to login page
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    };

    const navigationOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="badge badge-sm indicator-item">{carts.length}</span>
                </div>
            </button>
        </li>
        {user ? (
            <>
               {/*  <li className="text-white">Welcome, {user.displayName}</li> */}
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button type="button" onClick={handleLogout}>Logout</button></li>
            </>
        ) : (
            <li><Link to="/login">Login</Link></li>
        )}
    </>;
    return (
        <div className="navbar fixed z-10 bg-opacity-30 shadow-sm bg-black text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navigationOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navigationOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <button type="button" onClick={handleLogout} className="btn btn-outline btn-warning">Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-outline btn-warning">Login</Link>
                )}
            </div>
        </div>
    );
}

export default NavBar;