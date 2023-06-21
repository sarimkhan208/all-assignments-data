import { LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS } from "./actionTypes"
let initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  }

  export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST :
            return {...state , isLoading:true}
        case LOGIN_SUCCESS :
            return {...state , isLoading : false, isAuth:true , token:payload}
        case LOGIN_FAILURE :
            return {...state , isError:true}
        default : return state
    }
  }