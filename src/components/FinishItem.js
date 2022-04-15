import React, { Component } from 'react';
import { Alert } from 'antd';

export default class FinishItem extends Component {
    render(){
        return (
            <Alert message="Success" type="success" showIcon closable style={{width:'40%',marginLeft:'30%'}}/>
        );
    }
}