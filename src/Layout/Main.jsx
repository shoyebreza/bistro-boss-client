import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    return ( 
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
     );
}
 
export default Main;