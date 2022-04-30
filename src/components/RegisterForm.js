import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import classnames from 'classnames';
import withRouter from "../utils/withRouter";
import shortid from 'shortid';

class RegisterForm extends React.Component {
    state = {
        userInfo: {
            username: '',
            email: '',
            password: '',
            repPassword: ''
        },
        errMsg: []
    }
    // 在表单提交中调用actionCreators的函数
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ errMsg: [] });
        /** 
         * 点击提交后将this.state中的数据提交到后台
        */

        const { data } = await this.props.registerFn.registerAction(this.state.userInfo);
        if (data.status === 1) {
            return this.setState({ errMsg: data.msg });
        }
        this.props.finishFn.addFinishAc({
            type: 'success',
            msg: '注册成功',
            id: shortid.generate()
        });
        // console.log(this.props)
        this.props.history('/home');

    }
    handleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value.trim()
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
                                        <span className="star">*</span>用户名：<input type="text" name="username" id="username" className={classnames("input", { "isvalid": errMsg[0] === "username" })} onChange={this.handleChange} />
                                        <p><i style={{ fontSize: '0.5rem', color: '#f00' }}>{errMsg[0] === 'username' && errMsg[1]}</i></p>
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='email'>
                                        <span className="star">*</span>邮箱：<input type="email" name="email" id="email" className={classnames("input", { "isvalid": errMsg[0] === "email" })} onChange={this.handleChange} />
                                        <p><i style={{ fontSize: '0.5rem', color: '#f00' }}>{errMsg[0] === 'email' && errMsg[1]}</i></p>
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='password'>
                                        <span className="star">*</span>密码：<input type="password" name="password" id="password" className={classnames("input", { "isValid": errMsg[0] === "password" })} onChange={this.handleChange} />
                                        <p><i style={{ fontSize: '0.5rem', color: '#f00' }}>{errMsg[0] === 'password' && errMsg[1]}</i></p>
                                    </label>
                                </div>
                                <div className='formItem'>
                                    <label htmlFor='repPassword'>
                                        <span className="star">*</span>确认密码：<input type="password" name="repPassword" id="repPassword" className={classnames("input", { "isValid": errMsg[0] === "repPassword" })} onChange={this.handleChange} />
                                        <p><i style={{ fontSize: '0.5rem', color: '#f00' }}>{errMsg[0] === 'repPassword' && errMsg[1]}</i></p>
                                    </label>
                                </div>
                                <div className='formItem'><Button htmlType="submit" type="primary" style={{ width: '100%' }}>登录</Button></div>
                                <div className='formItem'>已有账号？<Link to="/login">去登录</Link></div>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        );
    }
}
export default withRouter(RegisterForm);