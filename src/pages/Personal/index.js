import React, { Component } from 'react';
import { Tabs, Row, Col, Result, Button } from 'antd';
import { ExceptionOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { addFinishAc } from '../Finish/store/actionCreators';
import axios from '../../utils/request';
import shortid from 'shortid';
import './index.css';

const { TabPane } = Tabs;

class Personal extends Component {
    callback = () => { }

    state = {
        userInfo: {},
        setupUserInfo:{
            uid:this.props.loginData.user.UID,
            username:'',
            oldpw:'',
            newpw:'',
            email:'',
            gender:''
        }
    }
    componentDidMount() {
        const uid = this.props.loginData.user.UID;
        // console.log(uid)
        axios.get('/api/personal?uid=' + uid)
            .then(res => {
                if (res.data.status === 0) {
                    this.setState({ userInfo: res.data.userInfo[0] })
                } else {
                    this.props.addFinishAc({
                        type: 'error',
                        msg: '服务器错误',
                        id: shortid.generate()
                    })
                }
            })
            .catch(err => console.log(err))
    }
    handleChange=(e)=>{
        this.setState({
            setupUserInfo: {
                ...this.state.setupUserInfo,
                [e.target.name]: e.target.value.trim()
            }
        });
        // console.log(e.target.value)
    }
    handleSubmit=e=>{
        e.preventDefault();
        const setupData = this.state.setupUserInfo; 
        if(setupData.username === ''){
            setupData.username = this.state.userInfo.name;
        }
        if(setupData.gender === ''){
            setupData.gender = '保密';
        }
        if(setupData.email === ''){
            setupData.email = this.state.userInfo.email;
        }
        axios.post('/api/setup',setupData)
        .then(res => {
            const {msg,status} = res.data;
            this.props.addFinishAc({
                type:status === 0 ? 'success' :'error',
                msg:msg,
                id:shortid.generate()
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        const { userInfo } = this.state;
        return (
            <Row justify="center" className='container_info'>
                <Col span={24} className='container_top'></Col>
                <Col span={20} className='container_title'>
                    <Tabs onChange={this.callback} type="card">
                        <TabPane tab="用户信息" key="1">
                            <Row justify='center'>
                                <Col>
                                    <div className='topImg'></div>
                                    <p className='infoItem'>用户名：<span>{userInfo.name}</span></p>
                                    <p className='infoItem'>uid：<span>{userInfo.id}</span></p>
                                    <p className='infoItem'>邮箱：<span>{userInfo.email}</span></p>
                                    <p className='infoItem'>性别：<span>{userInfo.gender}</span></p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="点赞内容" key="2">
                            <Result
                                status="info"
                                subTitle="暂无数据"
                                icon={<ExceptionOutlined />}
                            />
                        </TabPane>
                        <TabPane tab="个人发布" key="3">
                            <Result
                                status="info"
                                subTitle="暂无数据"
                                icon={<ExceptionOutlined />}
                            />
                        </TabPane>
                        <TabPane tab="修改资料" key="4">
                            <Row className='setup_container' justify='center' align='center'>
                                <Col span={24} className='setup_form'>
                                    <h3>修改我的账号信息</h3>
                                    <form className='setform' onSubmit={this.handleSubmit}>
                                        <div className='setup_form_item'>
                                            <label htmlFor='username'>用户名：</label>
                                            <input type='text' name='username' id='username' autoComplete='off' placeholder={userInfo.name} onChange={this.handleChange}/>
                                        </div>
                                        <div className='setup_form_item'>
                                            <label htmlFor='oldpw'>旧密码：</label>
                                            <input type='password' name='oldpw' id='oldpw' onChange={this.handleChange} required/>
                                        </div>
                                        <div className='setup_form_item'>
                                            <label htmlFor='newpw'>新密码：</label>
                                            <input type='password' name='newpw' id='newpw' onChange={this.handleChange} required/>
                                        </div>
                                        <div className='setup_form_item'>
                                            <label htmlFor='email'>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</label>
                                            <input type='email' name='email' id='email' autoComplete='off' placeholder={userInfo.email} onChange={this.handleChange}/>
                                        </div>
                                        <div className='setup_form_item'>
                                            性&nbsp;&nbsp;&nbsp;&nbsp;别：
                                            <label htmlFor='male' className='paddingItem'><input  type='radio' name='gender' id='male' value='男' onChange={this.handleChange}/>男</label>
                                            <label htmlFor='female' className='paddingItem'><input type='radio' name='gender' id='female' value='女' onChange={this.handleChange}/>女</label>
                                            <label htmlFor='secrecy' className='paddingItem'><input type='radio' name='gender' id='secrecy' value='保密' checked onChange={this.handleChange}/>保密</label>
                                        </div>
                                        <div className='setup_form_item'>
                                            <Button htmlType="reset" type="primary">重置</Button>
                                            <Button htmlType="submit" type="primary">提交</Button>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        );
    }
};
const mapStateToProps = state => {
    return {
        loginData: state.login
    };
};
export default connect(mapStateToProps, { addFinishAc })(Personal);