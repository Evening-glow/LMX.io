import React from 'react';
import {connect} from 'react-redux';
import {addFinishAc} from '../pages/Finish/store/actionCreators';
import shortid from 'shortid';

export default function(Comp){
    class Auth extends React.Component{
        UNSAFE_componentWillMount(){
            //如果没有登录则跳转到登录页
            if(this.props.isLogin === false){
                this.props.addFinishAc({
                    type: 'error',
                    msg: '请登录',
                    id: shortid.generate()
                });
                window.location.href='/login';
            }
        }
        render(){
            return <Comp {...this.props}/>;
        }
    }
    const mapStateToprops = state=>{
        return {
            isLogin:state.login.isLogin
        };
    };
    return connect(mapStateToprops,{addFinishAc})(Auth);
}