import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {syncUserInfo} from './pages/Login/store/actionCreators';
import jwtDecode from 'jwt-decode';
import App from './App';
import './index.css';

const tk = localStorage.getItem('@#TOKEN');
if(tk){
  store.dispatch(syncUserInfo(jwtDecode(tk)));
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
