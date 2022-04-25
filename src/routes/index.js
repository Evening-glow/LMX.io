/**
 * 所有路由集合
 */
import { Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import Wiki from '../pages/Wiki';
import Login from '../pages/Login';
import Flower from '../pages/Wiki/Flower';
import Register from "../pages/Register";
import Personal from '../pages/Personal';
import Setup from '../pages/Setup';
import Skill from "../pages/Skill";
import SkillInfo from "../pages/Skill/SkillInfo";
import MarkdownEdit from "../pages/MarkdownEdit";
import Articles from "../pages/Articles";

const routes = [
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
        path: '/register',
        element: <Register />
    },
    {
        path: '/personal',
        element: <Personal />
    },{
        path:'/setup',
        element:<Setup/>
    },
    {
        path:'/skill',
        element:<Skill/>,
        children:[
            {
                path:'skillInfo',
                element:<SkillInfo/>
            }
        ]
    },{
        path:'/markdown',
        element:<MarkdownEdit/>
    },{
        path:'/articles',
        element:<Articles/>
    },
    {
        path: '/*',
        element: <Navigate to="/home" />
    },
];
export default routes;