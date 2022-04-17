import * as actionTypes from './actionTypes';
import { isEmpty } from 'lodash';
const initStore = {
    isLogin:false,
    user:{}
};
export default (state=initStore,action)=>{
    switch(action.type){
        case actionTypes.SYNC_USER_INFO:
            return {
                isLogin:!isEmpty(action.payload),
                user:action.payload
            }
        default:
            return state;
    }
};