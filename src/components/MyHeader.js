import React from 'react';
import { Menu, Row, Col, Button, Avatar } from 'antd';
import { UserOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../publicImages/images/logo.png';
import withRouter from '../utils/withRouter';
import { connect } from 'react-redux';
import { logout } from '../pages/Login/store/actionCreators';
const { SubMenu } = Menu;
class MyHeader extends React.Component {
    state = {
        current: '/home'
    };
    componentDidMount() {
        let url = this.props.location.pathname;
        this.setState({
            current: url
        });
    }

    //被选中时调用
    handleSelectKey = (item, key, selectedKeys) => {
        this.setState({
            current: item.key
        });
    }
    changeDispaly = () => {
        this.setState({})
    }
    handleClick=()=>{
        this.props.logout();
        window.location.href='/home';
    }
    render() {
        const { current } = this.state;
        const {isLogin} = this.props.loginData;
        return (
            <Row justify="space-between" align="middle">
                <Col><img src={logo} alt="logo" /></Col>
                <Col span={12}>
                    <Menu onClick={this.changeDispaly} onSelect={this.handleSelectKey} defaultSelectedKeys={[current]} selectedKeys={[current]} mode="horizontal" style={{ fontSize: '16px' }}>
                        <Menu.Item key="/home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/photos">
                            <Link to="/photos">花卉图片</Link>
                        </Menu.Item>
                        <Menu.Item key="/wiki">
                            <Link to="/wiki">花卉知识</Link>
                        </Menu.Item>
                        
                        <Menu.Item key="/login" style={{ display: isLogin ? 'none' : '' }}>
                            <Link to="/login">登录</Link>
                        </Menu.Item>
                        <Menu.Item key="/register">
                            <Link to="/register" style={{ display: isLogin ? 'none' : '' }}>注册</Link>
                        </Menu.Item>
                        <SubMenu key="sub4" title={<Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />} style={{ display: isLogin ? '' : 'none' }}>
                            <Menu.Item key="9" icon={<AppstoreOutlined />}><Link to="/personal">我的信息</Link></Menu.Item>
                            <Menu.Item key="10" icon={<SettingOutlined />}><Link to="/setup">设置</Link></Menu.Item>
                            <Menu.Item key="11"><Button onClick={this.handleClick}>退出登录</Button></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
            </Row>
        );
    }
}
const mapStateToprops = state => {
    return {
        loginData: state.login
    };
};
export default connect(mapStateToprops, { logout })(withRouter(MyHeader));