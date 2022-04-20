import { useRoutes} from 'react-router-dom';
import routes from './routes';
import React from 'react';
import { Layout } from 'antd';
import './App.less';
import MyHeader from './components/MyHeader';
import Finish from './pages/Finish';

const { Header, Content, Footer } = Layout;
export default function App() {
  const ele = useRoutes(routes);
  return (
    <Layout>
      <Header style={{backgroundColor: '#fff',borderBottom:'1px solid #f0f0f0'}}><MyHeader /></Header>
      <Finish />
      <Content>{ele}</Content>
      <Footer style={{ backgroundColor: '#333', paddingTop: '20px', color: '#fff6e9' }}>footer</Footer>
    </Layout>
  );
}