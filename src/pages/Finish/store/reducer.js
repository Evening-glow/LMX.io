import * as actionTypes from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_FINISH:
           
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};