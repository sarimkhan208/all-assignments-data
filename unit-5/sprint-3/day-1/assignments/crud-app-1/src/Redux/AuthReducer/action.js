import axios from 'axios'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionType'


export const login = (email,password)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    let obj={
        email,
        password
    }
    return axios.post(`https://reqres.in/api/login`,obj)
    .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data.token}))
    .catch((err)=>dispatch({type:LOGIN_FAILURE}))
}