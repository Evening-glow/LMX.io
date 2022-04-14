import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import '../../pages/Login/index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCrators as registerActionCrators} from './store';
class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        repPassword: ''
    }
    // 在表单提交中调用actionCreators的函数
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('register')
        this.props.registerFn.registerAction();
    }
    handleChange = (e) => {

    }
    render() {
        return (
            <Row justify='center' className='formRow'>
                <Col span={12} className='formCol'>
                    <form onSubmit={this.handleSubmit}>
                        <Row justify='center'>
                            <Col>
                                <div className='formItem'>
                                    <label htmlFor='username'>
                                        <span className="star">*</span>用户名：<input type="text" name="username" id="username" className='input' onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='email'>
                                        邮箱：<input type="email" name="email" id="email" className='input' onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='password'>
                                        <span className="star">*</span>密码：<input type="password" name="password" id="password" className='input' onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='repPassword'>
                                        <span className="star">*</span>确认密码：<input type="password" name="repPassword" id="repPassword" className='input' onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className='formItem'><Button htmlType="submit" type="primary" style={{ width: '100%' }}>登录</Button></div>
                                <div className='formItem'>已有账号？<Link to="/login">去登录</Link></div>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        )
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
        registerFn:bindActionCreators(registerActionCrators,dispatch)
    }
};

// 参数一：需要传入映射的state对象，参数二：需要传入映射的actionCreators对象
//这样就可以从register/store下的reducer拿到state
export default connect(mapStateToProps,mapDispatchToProps)(Register);