import * as actionTypes from './actionTypes';
export default (state=true,action)=>{
    switch(action.type){
        case actionTypes.SHOW_FU:
            return true;
        case actionTypes.HIDDEN_FU:
            return false;
        default:
            return state;
    };
};