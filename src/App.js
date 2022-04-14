import { useRoutes } from 'react-router-dom';
import routes from './routes';
import React from 'react';
import {Layout} from 'antd';
import './App.less';
import MyHeader from './components/MyHeader';

const {Header,Content,Footer} = Layout;
export default function App() {
  const ele = useRoutes(routes);
  return (
    <Layout>
      <Header style={{height:'100px',backgroundColor:'#fff'}}><MyHeader/></Header>
      <Content>{ele}</Content>
      <Footer style={{backgroundColor:'#628f72',paddingTop:'20px',color:'#fff6e9'}}>footer</Footer>
    </Layout>
  );
}