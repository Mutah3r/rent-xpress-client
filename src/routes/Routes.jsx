import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Cars from "../pages/cars/Cars";
import SingleCar from "../pages/singleCar/SingleCar";

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
            }
        ]
    }
]);

export default router;