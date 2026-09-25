import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main.jsx'
import Home from '../pages/Home/Home/Home.jsx'
import Menu from '../pages/Menu/Menu/Menu.jsx';
import Order from '../pages/Order/Order/Order.jsx';
import Login from '../pages/Login/Login.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import Secret from '../pages/Shared/Secret/Secret.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import Dashboard from '../Layout/Dashboard.jsx';
import Cart from '../pages/Dashboard/Cart/Cart.jsx';
import AllUsers from '../components/AllUsers/AllUsers.jsx';
import AddItems from '../pages/Dashboard/AddItems/AddItems.jsx';
import AdminRoute from './AdminRoute.jsx';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems.jsx';
import UpdateItem from '../pages/Dashboard/UpdateItem/UpdateItem.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "order",
                element: <Order></Order>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "secret",
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "cart",
                element: <Cart />
            },
            
            {
                path: "addItem",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            },

            // admin routes
            
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);