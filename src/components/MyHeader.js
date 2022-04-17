import React from 'react';
import { Menu, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../publicImages/images/logo.png';
import withRouter from '../utils/withRouter';
import { connect } from 'react-redux';


class MyHeader extends React.Component {
    state = {
        current: '/home'
    };
    // handleClick = e => {
    //     this.setState({ current: e.key });
    // };
    componentDidMount() {
        let url = this.props.location.pathname;
        this.setState({
            current: url
        });
    }

    //被选中时调用
    handleSelectKey = (item, key, selectedKeys) => {
        //console.log(item.key);
        this.setState({
            current: item.key
        });
    }
    changeDispaly = () => {
        this.setState({})
    }

    render() {
        const { current } = this.state;
        return (
            <Row justify="start" align="middle">
                <Col><img src={logo} alt="logo" /></Col>
                <Col>
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
                    </Menu>
                </Col>
                <Col>
                    <div style={{display:this.props.loginData.isLogin?'':'none'}}>
                        <Link to="/login"><Button type="primary">个人中心</Button></Link>
                        <Link to="/register"><Button type="primary">退出</Button></Link>
                    </div>
                    <div style={{display:this.props.loginData.isLogin?'none':''}}>
                        <Link to="/login"><Button type="primary">登录</Button>
                        </Link><Link to="/register"><Button type="primary">注册</Button></Link>
                    </div>

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
export default connect(mapStateToprops, null)(withRouter(MyHeader));