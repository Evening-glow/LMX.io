import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import qs from 'query-string';
import { Breadcrumb, Row, Col } from 'antd';
import withRouter from '../../../utils/withRouter';
import axios from '../../../utils/request';

class SkillInfo extends Component {
    state = {
        author: '',
        time:'',
        title: '',
        content: ''
    }
    componentDidMount() {
        const { id } = qs.parse(this.props.location.search.slice(1));

        axios.get("/api/search?table_name=articles&id=" + id)
            .then(response => {
                const data = response.data.data[0];
                this.setState({
                    author: data.author,
                    title: data.title,
                    content: data.content,
                    time:data.dateline
                });
            })
            .catch(err => { console.log(err) })
    }
    render() {
        const { title, author, content,time } = this.state;
        return (
            <Row>
                <Col span={24} style={{padding:'20px'}}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item href='/skill'>返回</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Row justify='center' style={{padding:'30px 100px'}}>
                    <Col span={24}>
                        <h1 className='content_h1'>{title}</h1>
                        <p style={{textAlign:'center',fontSize:'12px'}}>作者：{author}&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{time}</p>
                        <div dangerouslySetInnerHTML={{ __html: content }} className='content_box'></div>
                    </Col>
                </Row>
            </Row>
        );
    }
}
export default withRouter(SkillInfo);
export const isShow = false;