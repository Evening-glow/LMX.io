import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { Breadcrumb, Row, Col } from 'antd';
import withRouter from '../../../utils/withRouter';
import axios from '../../../utils/request';
import { connect } from 'react-redux';
import { hiddenFu, showFu } from '../store/actionCreators';

class SkillInfo extends Component {
    state = {
        title: '',
        author: '',
        content: '',
        time: ''
    }
    componentDidMount() {
        this.props.hiddenFu();
        const { id } = qs.parse(this.props.location.search.slice(1));

        axios.get("/api/search?table_name=articles&id=" + id)
            .then(response => {
                const { status } = response.data;
                if (status === 0) {
                    const data = response.data.data[0];
                    this.setState({
                        title: data.title,
                        author: data.author,
                        content: data.content,
                        time: data.dateline
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    componentWillUnmount() {
        this.props.showFu();
    }
    render() {
        const { title, author, content, time } = this.state;
        return (
            <Row>
                <Col span={24} style={{ padding: '20px' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/skill'>花店花艺</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Row justify='center'>
                    <Col span={20}>
                        <h1 className='content_h1'>{title}</h1>
                        <p style={{ textAlign: 'center', fontSize: '12px' }}>作者：{author}&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{time}</p>
                        <div dangerouslySetInnerHTML={{ __html: content }} className='content_box'></div>
                    </Col>
                </Row>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return { skillData: state.skill }
}
export default connect(mapStateToProps, { hiddenFu, showFu })(withRouter(SkillInfo));