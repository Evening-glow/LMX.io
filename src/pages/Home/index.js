import React from 'react';
import { Row, Col, Layout } from 'antd';
import {Link} from 'react-router-dom';
import topImg from "../../publicImages/images/rotationCard2.jpg";
import RankingList from '../../components/RankingList';
import './index.css'

const { Content } = Layout;


export default class Home extends React.Component {
    render() {
        return (
            <Content style={{ backgroundColor: '#fafafa' }}>
                <Row>
                    <Col span={24}>
                        <div style={{width:'100%',height:'400px',overflow:'hidden'}}><img src={topImg} alt="topImg" /></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}><RankingList /></Col>
                    <Col span={7}>
                        <div className="photograph container">
                            <h2>摄影技巧</h2>
                            <ul>
                                <li>怎样拍花卉好看？</li>
                                <li>10年摄影经验传授于你</li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="container flowerInfo">
                            <h2>花艺</h2>
                            <ul>
                                <li><Link to='/skill/skillInfo/?id=2'>她的插花源于瞬间灵感虽不完美却打动人心</Link></li>
                                <li>开业6年斩获多个奖项“一丛植造”如何在高端商场站稳脚跟</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="container">
                            
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    };
}