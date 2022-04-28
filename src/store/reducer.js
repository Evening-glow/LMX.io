import { combineReducers } from "redux";
import {reducer as registerReducer} from '../pages/Register/store';
import {reducer as finishReducer } from '../pages/Finish/store';
import {reducer as loginReducer } from '../pages/Login/store';
import {reducer as skillReducer} from '../pages/Skill/store';
import {reducer as wikiReducer} from '../pages/Wiki/store';
import {reducer as articlesReducer} from '../pages/Articles/store';
// 组合所有reducer
export default combineReducers({
    register:registerReducer,
    finish:finishReducer,
    login:loginReducer,
    skill:skillReducer,
    wiki:wikiReducer,
    articles:articlesReducer
});