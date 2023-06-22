import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Cars from "../pages/cars/Cars";
import SingleCar from "../pages/singleCar/SingleCar";
import AboutUs from "../pages/about/AboutUs";
import ContactUs from "../pages/contact/ContactUs";

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
    }
]);

export default router;