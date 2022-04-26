import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { Breadcrumb, Row, Col, Button, Avatar } from 'antd';
import { MessageOutlined, UserOutlined } from '@ant-design/icons';
import withRouter from '../../../utils/withRouter';
import axios from '../../../utils/request';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import markdownIt from 'markdown-it';
import shortid from 'shortid';
import { actionCreators as articlesActionCreators } from '../store';
import { actionCreators as finishActionCreators } from '../../Finish/store';
import Comments from '../../../components/comments';
import './index.css';

const md = new markdownIt({
    html: false, breaks: true, linkify: true,
    xhtmlOut: false,
});
//禁用将电子邮件转换为链接
md.linkify.set({ fuzzyEmail: false });

class Details extends Component {
    state = {
        data: {
            title: '',
            author: '',
            content: '',
            time: ''
        },
        postData: {
            auth: '',
            content: '',
            articleID: null,
        },
        comments: []
    }
    componentDidMount() {
        this.props.articlesFn.hiddenFu();
        const { id } = qs.parse(this.props.location.search.slice(1));
        // 获取文章数据
        axios.get("/api/search?table_name=userarticles&id=" + id)
            .then(response => {
                const data = response.data.data[0];
                this.setState({
                    data: {
                        title: data.title,
                        author: data.author,
                        content: data.content,
                        time: data.dateline
                    }
                });
            })
            .catch(err => {
                console.log(err);
            })
        // 获取评论区数据
        const articleID = id;
        axios.get('/api/comments?articleID=' + articleID)
            .then(res => {
                // console.log(res)
                if(res.data.status === 0){
                    this.setState({comments:res.data.data})
                }
                // console.log(this.state)
            })
            .catch(err => console.log(err))
    }
    componentWillUnmount() {
        this.props.articlesFn.showFu();
    }
    handleChange = (e) => {
        const { username } = this.props.loginData.user;
        const { id } = qs.parse(this.props.location.search.slice(1));
        const content = e.target.value;
        // console.log(username,id,content)
        this.setState({
            postData: {
                auth: username,
                content: content,
                articleID: id
            }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const time = new Date().toLocaleString('chinese', { hour12: false }).replace(' 下午', ' ');
        // console.log(time)
        const data = {
            ...this.state.postData,
            dateline: time
        }
        // console.log(data)
        //发起请求，提交数据到数据库
        axios.post('/api/insertComment', data)
            .then(res => {
                const msg = res.data.msg;
                const status = res.data.status;
                // console.log(msg,status)
                this.props.finishFn.addFinishAc({
                    type: status === 0 ? 'success' : 'error',
                    msg: msg,
                    id: shortid.generate()
                });
                //提交成功后重新渲染组件
                this.setState({});
            })
            .catch(err => console.log(err))

    }
    render() {
        const { title, author, content, time } = this.state.data;
        const {comments} = this.state;
        return (
            <Row>
                <Col span={24} style={{ padding: '20px' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/articles'>用户分享</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Row justify="center" style={{ padding: '30px 100px' }}>
                    <Row>
                        <Col span={24}>
                            <h1 style={{ color: '#333' }}>{title}</h1>
                            <p style={{ fontSize: '12px' }}>作者：{author}&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{time.slice(0, 19).replace('\T', ' ')}</p>
                            <div dangerouslySetInnerHTML={{ __html: md.render(content) }} style={{ paddingTop: '20px', borderTop: '1px solid #333' }}></div>
                        </Col>
                    </Row>
                    {/* 评论区 */}
                    <Row className='comment' gutter={12}>
                        <Col>{<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}</Col>
                        <Col><form onSubmit={this.handleSubmit} className="commentForm"><textarea className='articlesTextarea' onChange={this.handleChange} /><Button icon={<MessageOutlined />} type='primary' htmlType="submit" className='articlesSubmitBtn'>评论</Button></form></Col>
                        <Col span={24}>
                            
                            {comments.map(item=>{
                                return <Comments commentData={item} key={item.id}/>
                            })}
                        </Col>
                    </Row>
                </Row>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return { articlesData: state.articles, loginData: state.login }
}
const mapDispatchToProps = dispatch => {
    return {
        articlesFn: bindActionCreators(articlesActionCreators, dispatch),
        finishFn: bindActionCreators(finishActionCreators, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details));