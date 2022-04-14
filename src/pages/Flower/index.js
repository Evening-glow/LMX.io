import React, { Component } from 'react';
import {Breadcrumb} from 'antd';

class Flower extends Component {

    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wiki">返回</Breadcrumb.Item>
                </Breadcrumb>
                <div>Flower</div>
            </div>
        );
    }
}
export default Flower;