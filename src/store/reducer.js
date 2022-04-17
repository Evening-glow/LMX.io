import { combineReducers } from "redux";
import {reducer as registerReducer} from '../pages/Register/store';
import {reducer as finishReducer } from '../pages/Finish/store';
import {reducer as loginReducer } from '../pages/Login/store';
// 组合所有reducer
export default combineReducers({
    register:registerReducer,
    finish:finishReducer,
    login:loginReducer
});