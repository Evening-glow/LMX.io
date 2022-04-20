import React, { Component } from 'react';
import { List, Typography, Row, Col } from 'antd';
import topImg from '../../publicImages/images/rotationCard4.jpg';
import { Link, Outlet } from 'react-router-dom';
import axios from '../../utils/request';
import imgURL from '../../utils/getSkillImgs';
import {isShow as myShow} from './SkillInfo';

const imgStyle = {
    width: '100%'
}
console.log(myShow)
const { Paragraph } = Typography;
export default class Skill extends Component {
    state = {
        info: [],
        isShow: true
    }
    changeShow = () => {
        this.setState({ isShow: false });
    }
    componentDidMount() {
        axios.get('/api/skill')
            .then(response => {
                const data = response.data.data;
                this.setState({ info: data });
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { info, isShow } = this.state;
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Row>
                    <Col span={24}>
                        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}><img style={imgStyle} src={topImg} alt="topImg" /></div>
                    </Col>
                </Row>
                <Row justify="space-around" style={{ display: isShow ? '' : 'none' }}>
                    <Col span={20}>
                        <List
                            itemLayout="vertical"
                            size="default"
                            pagination={{
                                onChange: page => { },
                                pageSize: 4,
                            }}
                            header={<h2>花店花艺</h2>}
                            dataSource={info}

                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    extra={
                                        <img
                                            width={250}
                                            alt="logo"
                                            src={imgURL[item.id]}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        title={<Link to={`/skill/skillInfo/?id=${item.id}`} onClick={this.changeShow}>{item.title}</Link>}
                                    />
                                    <List.Item.Meta
                                        description={<p>作者：{item.author}<br/>时间：{item.dateline.slice(0,19)}</p>}
                                    />
                                    <Paragraph ellipsis={{ rows: 3 }}>{item.environment}</Paragraph>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </div>
        );
    }
}