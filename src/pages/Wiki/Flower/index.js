import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Row, Col } from 'antd';
import withRouter from '../../../utils/withRouter';
import qs from 'query-string';
import axios from '../../../utils/request';
import { connect } from 'react-redux';
import {hiddenFu,showFu} from '../store/actionCreators';
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
        this.props.hiddenFu();
        const { id } = qs.parse(this.props.location.search.slice(1));
        // console.log("http://localhost:5000/api/flower?id="+id)
        axios.get("/api/search?table_name=flower_info&id=" + id)
            .then(response => {
                const data = response.data.data[0];
                this.setState({
                    name: data.name,
                    careKnowledge: data.careKnowledge,
                    environment: data.environment,
                    symbol: data.symbol,
                    area: data.area
                });
            })
            .catch(err => { console.log(err) })
    }
    componentWillUnmount(){
        this.props.showFu();
    }
    render() {
        const { name, careKnowledge, environment, symbol, area } = this.state;
        return (
            <Row>
                <Row className='goBox'>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to='/wiki'>花卉知识</Link></Breadcrumb.Item>
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
const mapStateToProps = state=>{
    return {wikiData:state.wiki};
}
export default connect(mapStateToProps,{hiddenFu,showFu})(withRouter(Flower));