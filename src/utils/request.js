/**
 * 发起请求
 * 添加路由限制
 */
import axios from 'axios';
import { connect } from 'react-redux';
import {syncUserInfo} from '../pages/Login/store/actionCreators';

//将token添加到请求头
axios.interceptors.request.use(config=>{
    const passURL = ['/api/login','/api/register','/api/flowerInfo','/api/search','/api/skill'];
    if(passURL.includes(config.url)) return config;

    const tk = localStorage.getItem('@#TOKEN');
    if(tk) {
        config.headers.Authorization = 'Bearer '+ tk;
    }else{
        delete config.headers.Authorization;
    }
    return config;
});
//token错误时，特殊处理
// 当后端返回的数据是TOKEN ERROR时页面跳转到登录页,并删除本地token
axios.interceptors.response.use(response=>{
    const { status,msg } = response.data;
    if(status === 1 && msg === 'TOKEN ERROR'){
        localStorage.removeItem('@#TOKEN');
        window.location.href = '/login';
    }
    return response;
});
export default axios;