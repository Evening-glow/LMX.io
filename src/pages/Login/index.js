import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
// import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css'

class Login extends Component {
    state={
        username:'',
        password:''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
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
                                        <span className="star">*</span>用户名：<input type="text" name="username" id="username" className="input" onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='password'>
                                        <span className="star">*</span>密码：<input type="password" name="password" id="password" className="input" onChange={this.handleChange}/>
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