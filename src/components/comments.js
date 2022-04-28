import React, { Component } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';

class Comments extends Component {
    render() {
        const {auth,content,dateline} = this.props.commentData;
        return (
            <Comment
                //   actions={actions}
                author={<p>{auth}</p>}
                avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
                content={
                    content
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(dateline).fromNow()}</span>
                    </Tooltip>
                }
            />
        );
    };
}

export default Comments;