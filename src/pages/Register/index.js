import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm';
import '../../pages/Login/index.css';

/*将redux和react关联*/
import { connect } from 'react-redux';
/*
把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象。
同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们。
bindActionCreators(actionCreators, dispatch)
*/
import { bindActionCreators } from 'redux';
import { actionCreators as registerActionCreators } from './store';
import { actionCreators as finishActionCreators } from '../Finish/store';

class Register extends Component {
    render(){
        return <RegisterForm {...this.props}/>;
    }
}

const mapStateToProps = state => {
    return {
        //这里的register是src下的store中的reducer.js写的
        registerData: state.register
    }
};
const mapDispatchToProps = dispatch => {
    return {
        registerFn: bindActionCreators(registerActionCreators, dispatch),
        finishFn:bindActionCreators(finishActionCreators,dispatch),
    }
};

// 参数一：需要传入映射的state对象将state映射到组件的props中，参数二：需要传入映射的actionCreators对象将action也映射到组件props中把各种 dispatch也变成了 props 让你可以直接使用，进而修改 store 中的数据。；
//这样就可以从register/store下的reducer拿到state
export default connect(mapStateToProps, mapDispatchToProps)(Register);