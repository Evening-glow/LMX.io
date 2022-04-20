import React from 'react';
import axios from '../../utils/request';
import imgURL from '../../utils/getImages';
import { List, Typography, Row, Col } from 'antd';
import RankingList from '../../components/RankingList';
import topImg from '../../publicImages/images/rotationCard1.jpg';
import {Link,Outlet} from 'react-router-dom';

const { Paragraph } = Typography;

const imgStyle = {
    position: 'relative',
    top: -250
}
export default class Wiki extends React.Component {
    state = {
        flowerInfo: [],
        isShow:true
    }
    changeShow=()=>{
        this.setState({isShow:false});
    }
    componentDidMount() {
        axios.get('/api/flowerInfo')
            .then(response => {
                const data = response.data.data;
                this.setState({flowerInfo:data});
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { flowerInfo,isShow } = this.state;
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Row>
                    <Col span={24}>
                        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}><img style={imgStyle} src={topImg} alt="topImg" /></div>
                    </Col>
                </Row>
                <Row justify="space-around" style={{display:isShow?'':'none'}}>
                    <Col span={16}>
                        <List
                            itemLayout="vertical"
                            size="default"
                            pagination={{
                                onChange: page => {
                                    // console.log(page);
                                },
                                pageSize: 4,
                            }}
                            header={<h2>花卉知识</h2>}
                            dataSource={flowerInfo}

                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    extra={
                                        <img
                                            width={200}
                                            alt="logo"
                                            src={imgURL[item.id]}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        title={<Link to={`/wiki/flower/?id=${item.id}`} onClick={this.changeShow}>{item.name}</Link>}
                                    />
                                    <Paragraph ellipsis={{ rows: 3 }}>{item.environment}</Paragraph>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col>
                        <RankingList/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </div>
        );
    }
}