import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main.jsx'
import Home from '../pages/Home/Home/Home.jsx'
import Menu from '../pages/Menu/Menu/Menu.jsx';
import Order from '../pages/Order/Order/Order.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "order",
                element: <Order />
            },
            {
                path: "order/:category",
                element: <Order />
            }
        ]
    },
]);