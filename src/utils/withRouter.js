/*
用于给组件添加props.history.location.pathname
*/
import {useLocation, useNavigate } from "react-router";  
import React from 'react'
export default function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const history = useNavigate();
        return <Child {...props} navigate={navigate} location={location} history={history}/>;
    }
}
