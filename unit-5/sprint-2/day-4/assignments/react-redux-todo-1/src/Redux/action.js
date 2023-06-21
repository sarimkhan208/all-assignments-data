//action creator functions here

import { ADD_TODOS_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionTypes"
import axios from 'axios'



const getTodoRequest = ()=>{
    return {type : GET_TODOS_REQUEST}
}
const getTodoSuccess = (payload)=>{
    return {type : GET_TODOS_SUCCESS , payload}
}
const getTodoFailure = ()=>{
    return {type : GET_TODOS_ERROR}
}

const postTodoSuccess = ()=>{
    return {type : ADD_TODOS_SUCCESS}
}

// url= http://localhost:8080/todos
export const getData = (dispatch) =>{
    dispatch(getTodoRequest())
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((res)=>dispatch(getTodoSuccess(res.data)))
    .catch((err)=>dispatch(getTodoFailure()))
}

export const postData = (payload) => (dispatch) =>{
    let obj = {
        title : payload,
        status : false
    }
    dispatch(getTodoRequest())
    return axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,obj)
    .then((res)=>dispatch(postTodoSuccess()))
    .catch((err)=>dispatch(getTodoFailure()))
}