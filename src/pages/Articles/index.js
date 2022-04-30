import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import withRouter from '../../utils/withRouter';
import { hiddenFu, showFu } from './store/actionCreators';
import { List, Space, Row, Col } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from '../../utils/request';
import RankingList from '../../components/RankingList';
import './index.css';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

class Articles extends Component {
    state = {
        dateArr: [],
        reMark: ''
    };
    componentDidMount() {
        this.props.showFu();
        if (this.props.location.pathname.includes('/details')) {
            this.props.hiddenFu();
        }
        axios.get('/api/articles')
            .then(res => {
                const dateArr = res.data.data;
                // console.log(res)
                this.setState({ dateArr });
            })
            .catch(err => console.log(err))
    }
    render() {
        const { dateArr } = this.state;
        const isShow = this.props.articlesData;
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Row><Col span={24} className='topImg'></Col></Row>
                <Row justify='center' style={{ display: isShow ? '' : 'none' }}>
                    <Col span={16}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => { },
                                pageSize: 5,
                            }}
                            dataSource={dateArr}
                            header={<h2>用户分享</h2>}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                                </div>
                            }
                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    actions={[
                                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                                >
                                    <List.Item.Meta
                                        // avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size='large'>U</Avatar>}
                                        title={<Link to={`/articles/details/?id=${item.id}`}>{item.title}</Link>}
                                        description={<p>作者：{item.author}&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{item.dateline}</p>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={6}>
                        <RankingList/>
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
const mapStateToProps = state => {
    return { articlesData: state.articles }
}
export default connect(mapStateToProps, { hiddenFu, showFu })(withRouter(Articles));