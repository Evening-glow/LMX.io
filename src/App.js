import { useRoutes } from 'react-router-dom';
import routes from './routes';
import React from 'react';
import './App.less';
import MyHeader from './components/MyHeader';

// const {Header} = Layout;
export default function App() {
  const ele = useRoutes(routes);
  return (
    <div>
      <MyHeader/>
      <div>{ele}</div>
      <footer style={{backgroundColor:'#628f72',paddingTop:'20px',color:'#fff6e9'}}>footer</footer>
    </div>
  );
}