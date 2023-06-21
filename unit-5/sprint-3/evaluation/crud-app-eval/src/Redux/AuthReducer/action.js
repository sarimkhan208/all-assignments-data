import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import axios from "axios"
export const auth =(obj)=> (dispatch) =>{
    dispatch({type:LOGIN_REQUEST})
    return axios.get(`https://reqres.in/api/login`,obj)
    .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data.support.text}))
    .catch((err)=>dispatch({type:LOGIN_FAILURE}))
}
// dispatch({type:LOGIN_SUCCESS,payload:res.data.support.text})