import axios from '../../../utils/request';
import * as actionTypes from './actionTypes';
// 登录提交时，发起请求，并获取返回的用户信息，保存到redux中
export const  loginAc=data=>{
    return dispatch => {
        return axios.post('/api/login',data);
    };
};
// 解析token，并同步信息到redux
export const syncUserInfo=data=>{
    return {
        type:actionTypes.SYNC_USER_INFO,
        payload:data
    }
}
// 退出登录时，删除本地数据，并将redux中用户信息清空
export const logout = data => {
    return dispatch => {
        console.log('logouot')
        localStorage.removeItem('@#TOKEN');
        dispatch(syncUserInfo({}));
    }
}