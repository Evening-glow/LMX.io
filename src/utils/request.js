/**
 * 发起请求
 * 添加路由限制
 */
import axios from 'axios';

//将token添加到请求头
axios.interceptors.request.use(config=>{
    const passURL = ['/api/login','api/register'];
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
axios.interceptors.response.use(response=>{
    const { status,msg } = response.data;
    if(status === 1 && msg === 'TOKEN ERROR'){
        window.location.href = '/login';
    }
    return response;
});
export default axios;