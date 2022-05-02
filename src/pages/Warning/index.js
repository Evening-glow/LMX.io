import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，资源不存在"
    extra={<Button type="primary"><Link to='/home'>Back Home</Link></Button>}
  />
);

export const ERROR = () => {
  <Result
    status="500"
    title="500"
    subTitle="服务器出错"
  />
}