import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as loginActionCreators } from './store';
import LoginForm from '../../components/LoginForm';
import { actionCreators as finishActionCreators } from '../Finish/store';
import './index.css'

class Login extends Component {
    render(){
        return <LoginForm {...this.props}/>;
    }
}
const mapStateToProps = state => {
    return {
        //这里的register是src下的store中的reducer.js写的
        loginData: state.login
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loginFn: bindActionCreators(loginActionCreators, dispatch),
        finishFn:bindActionCreators(finishActionCreators,dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);