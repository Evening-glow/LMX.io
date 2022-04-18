import { Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import Wiki from '../pages/Wiki';
import Login from '../pages/Login';
import Flower from '../pages/Flower';
import Register from "../pages/Register";
import Personal from '../pages/Personal';
import Setup from "../pages/Setup";
// import Auth from '../utils/auth';

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
        path:'/personal',
        element:<Personal/>
    },
    {
        path:'/setup',
        element:<Setup/>
    },
    {
        path: '/',
        element: <Navigate to="/home" />
    },
];
export default routes;