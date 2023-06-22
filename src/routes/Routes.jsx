import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Cars from "../pages/cars/Cars";
import SingleCar from "../pages/singleCar/SingleCar";
import AboutUs from "../pages/about/AboutUs";
import ContactUs from "../pages/contact/ContactUs";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import Orders from "../pages/dashboard/Orders";
import Favorite from "../pages/dashboard/Favorite";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cars',
                element: <Cars />
            },
            {
                path: '/cars/:carId',
                element: <SingleCar />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            },
            {
                path: '/dashboard/favorite',
                element: <Favorite />
            },
        ]
    }
]);

export default router;