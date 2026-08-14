import { Outlet, useLocation } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    return ( 
        <div>
            {!isLoginPage && <NavBar></NavBar>}
            <Outlet></Outlet>
            {!isLoginPage && <Footer></Footer>}
        </div>
     );
}
 
export default Main;