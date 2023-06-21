import { ADD_TODO_FAILED, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

export const getTodoRequestAction = ()=>{
    return {type : GET_TODO_REQUEST}
}

export const getTodoSuccessAction = (payload)=>{
    return {type : GET_TODO_SUCCESS , payload}
}

export const getTodoFailedAction = ()=>{
    return {type : GET_TODO_FAILED}
}


export const addTodoRequestAction = ()=>{
    return {type : ADD_TODO_REQUEST}
}

export const addTodoSuccessAction = (payload)=>{
    return {type : ADD_TODO_SUCCESS , payload}
}

export const addTodoFailedAction = ()=>{
    return {type : ADD_TODO_FAILED}
}