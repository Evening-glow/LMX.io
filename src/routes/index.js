import { Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import Wiki from '../pages/Wiki';
import Login from '../pages/Login';
import Flower from '../pages/Flower';
import Register from "../pages/Register";

const routes =[
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/photos',
        element: <Photos />
    },
    {
        path: '/wiki',
        element: <Wiki />,
        children: [
            {
                path: 'flower',
                element: <Flower />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path: '/',
        element: <Navigate to="/home" />
    },
];
export default routes;