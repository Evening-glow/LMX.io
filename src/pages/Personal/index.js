import React, { Component } from 'react';
import { Tabs, Row, Col } from 'antd';
import './index.css';
const { TabPane } = Tabs;

class Personal extends Component {
    callback = () => { }
    render() {
        return (
            <Row justify="center" className='container_info'>
                <Col span={20}>
                    <Tabs onChange={this.callback} type="card" tabPosition="left">
                        <TabPane tab="用户信息" key="1">
                            <Row>
                                <Col>
                                    <p className='infoItem'>用户名：<span>myself</span></p>
                                    <p className='infoItem'>id：<span>23</span></p>
                                    <p className='infoItem'>邮箱：<span>linmdd@outlook.com</span></p>
                                    <p className='infoItem'>性别：<span>女</span></p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="点赞内容" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="个人发布" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        );
    }
};
export default Personal;