import { Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import Wiki from '../pages/Wiki';
import Login from '../pages/Login';

export default [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/photos',
        element:<Photos/>
    },
    {
        path:'/wiki',
        element:<Wiki/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<Navigate to="/home"/>
    },
]