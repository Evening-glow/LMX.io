import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import withRouter from '../../utils/withRouter';
import qs from 'query-string';
import axios from '../../utils/request';
import './index.css';

class Flower extends Component {
    state = {
        name: '',
        careKnowledge: '',
        environment: '',
        symbol: '',
        area: ''
    }
    componentDidMount() {
        const { id } = qs.parse(this.props.location.search.slice(1));
        // console.log("http://localhost:5000/api/flower?id="+id)
        axios.get("/api/search?id=" + id)
            .then(response => {
                this.setState({
                    name: response.data.data[0].name,
                    careKnowledge: response.data.data[0].careKnowledge,
                    environment: response.data.data[0].environment,
                    symbol: response.data.data[0].symbol,
                    area: response.data.data[0].area
                });
            })
            .catch(err => { console.log(err) })
    }
    render() {
        const { name, careKnowledge, environment, symbol, area } = this.state;
        return (
            <Row>
                <Row className='goBox'>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                            <Breadcrumb.Item href="/wiki">返回</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col span={18}>
                        <h1 className='content_h1'>{name}</h1>
                        <h3>分布地区</h3>
                        <p dangerouslySetInnerHTML={{ __html: area }} className='content_p'></p>
                        <h3>生长环境</h3>
                        <p dangerouslySetInnerHTML={{ __html: environment }} className='content_p'></p>
                        <h3>培育知识</h3>
                        <p dangerouslySetInnerHTML={{ __html: careKnowledge }} className='content_p'></p>
                        <h3>花语</h3>
                        <p dangerouslySetInnerHTML={{ __html: symbol }} className='content_p'></p>
                    </Col>
                </Row>
            </Row>
        );
    }
}
export default withRouter(Flower);