import {LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"

export const loginSuccess = (obj)=> (dispatch)=>{

    dispatch({type:LOGIN_SUCCESS, payload :obj})
}

export const loginFailure = (dispatch) =>{
    dispatch({type:LOGIN_FAILURE})
}