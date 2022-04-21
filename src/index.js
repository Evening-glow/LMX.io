import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {syncUserInfo} from './pages/Login/store/actionCreators';
import jwtDecode from 'jwt-decode';
import App from './App';
import './index.css';

// 添加token到浏览器本地
const tk = localStorage.getItem('@#TOKEN');
// 解析token并同步到redux
// 当token出错时，不做同步，删除本地token
if(tk){
  try{
    store.dispatch(syncUserInfo(jwtDecode(tk)));
  }catch(err){
    localStorage.removeItem('@#TOKEN');
    window.location.href="/login";
  }
}
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
