import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
// import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from '../../utils/request';
import './index.css'

class Login extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
        },
        errMsg:[]
    }
    handleSubmit = async (e) => {
        e.preventDefault();this.setState({ errMsg: [] });
        const { data } = await axios.post('/api/login', this.state.userInfo);
        
        console.log(this.state.userInfo, data);
    }
    handleChange = (e) => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }
    render() {
        const { errMsg } = this.state;
        return (
            <Row justify='center' className='formRow'>
                <Col span={12} className='formCol'>
                    <form onSubmit={this.handleSubmit}>
                        <Row justify='center'>
                            <Col>
                                <div className='formItem'>
                                    <label htmlFor='username'>
                                        <span className="star">*</span>用户名：<input type="text" name="username" id="username" className="input" onChange={this.handleChange} />
                                        {/* <p><i style={{ fontSize: '0.5rem', color: '#f00' }}>{errMsg[0] === 'username' && errMsg[1]}</i></p> */}
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='password'>
                                        <span className="star">*</span>密码：<input type="password" name="password" id="password" className="input" onChange={this.handleChange} />
                                        {/* <p><i style={{ fontSize: '0.5rem', color: '#f00' }}>{errMsg[0] === 'password' && errMsg[1]}</i></p> */}
                                    </label>
                                </div>
                                <div className='formItem'><Button htmlType="submit" type="primary" style={{ width: '100%' }}>登录</Button></div>
                                <div className='formItem'>没有账号？<Link to="/register">去注册</Link></div>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        );
    }
}
export default Login;