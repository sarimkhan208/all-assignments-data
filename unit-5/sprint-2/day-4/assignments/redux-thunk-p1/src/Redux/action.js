import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS } from "./actionType"
import axios from 'axios'


export const getTodoRequest = ()=>{
    return {type : GET_TODOS_REQUEST}
}
export const getTodoSuccess = (payload)=>{
    return {type : GET_TODOS_SUCCESS , payload}
}
export const getTodoFailure = ()=>{
    return {type : GET_TODOS_FAILURE}
}


export const postTodoSuccess = (payload)=>{
    return {type : POST_TODOS_SUCCESS}
}





export const getData = (dispatch)=>{
    dispatch(getTodoRequest())
    return axios.get(' http://localhost:8080/todos')
    .then((res)=>dispatch(getTodoSuccess(res.data)))
    .catch((err)=>dispatch(getTodoFailure()))
}

export const postData = (payload) => (dispatch) =>{
    dispatch(getTodoRequest())
    let obj = {
        title : payload,
        status : false
    }
    return axios.post('http://localhost:8080/todos',obj)
    .then((res)=>{dispatch(postTodoSuccess())})
    .catch((err)=>{dispatch(getTodoFailure())})
}

