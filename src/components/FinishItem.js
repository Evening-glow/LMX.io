import React, { Component } from 'react';
import { Alert } from 'antd';

export default class FinishItem extends Component {
    render() {
        const { type, msg } = this.props;
        return (
            <Alert message={msg} type={type} showIcon closable style={{ width: '40%', marginLeft: '30%' }} />
        );
    }
}