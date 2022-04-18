import * as actionTypes from './actionTypes';
export  const  addFinishAc = data=>{
    // console.log('sucess')
    return {
        type:actionTypes.ADD_FINISH,
        payload:data
    };
};