import axios from '../../../utils/request'
export const registerAction =data=>{
    //发起请求，将data发送到后台
    return dispatch=>{
        return axios.post('/api/register',data);//返回promise
    }
    
};