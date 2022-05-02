import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
// import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import withRouter from "../utils/withRouter";
import shortid from 'shortid';

class LoginForm extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
        },
        errMsg: []
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {data}  = await this.props.loginFn.loginAc(this.state.userInfo);
        if (data.status === 0) {
            // 存储token到本地
            localStorage.setItem('@#TOKEN',data.token);
            this.props.loginFn.syncUserInfo(jwtDecode(data.token));
            this.props.finishFn.addFinishAc({
                type: 'success',
                msg: '登录成功',
                id: shortid.generate()
            });
            this.props.history('/home');
            return;
        }
        
        this.props.finishFn.addFinishAc({
            type: 'error',
            msg: '登录失败',
            id: shortid.generate()
        });
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
        return (
            <Row justify='center' className='formRow'>
                <Col span={12} className='formCol'>
                    <form onSubmit={this.handleSubmit}>
                        <Row justify='center'>
                            <Col>
                                <div className='formItem'>
                                    <label htmlFor='username'>
                                        <span className="star">*</span>用户名：<input type="text" name="username" id="username" className="input" onChange={this.handleChange} required/>
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='password'>
                                        <span className="star">*</span>密码：<input type="password" name="password" id="password" className="input" onChange={this.handleChange} required/>
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
export default withRouter(LoginForm);