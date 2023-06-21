import { ADD_TODO_FAILED, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"


export const getTodoRequest = ()=>{
    return {type : GET_TODO_REQUEST}   
}
export const getTodoSuccess = (payload)=>{
    return {type : GET_TODO_SUCCESS ,payload }   
}
export const getTodoFailed = ()=>{
    return {type : GET_TODO_FAILED}   
}



export const addTodoRequest = ()=>{
    return {type : ADD_TODO_REQUEST}   
}
export const addTodoSuccess = (payload)=>{
    return {type : ADD_TODO_SUCCESS ,payload }   
}
export const addTodoFailed = ()=>{
    return {type : ADD_TODO_FAILED}   
}