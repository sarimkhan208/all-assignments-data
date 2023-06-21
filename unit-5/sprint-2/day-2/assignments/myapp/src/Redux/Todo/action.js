import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

export const getTodoRequestAction = ()=>{
    return {type : GET_TODO_REQUEST}
}


export const getTodoSuccessAction = (payload)=>{
    return {type : GET_TODO_SUCCESS , payload}
}

export const getTodoFailureAction = ()=>{
    return {type : GET_TODO_FAILURE}
}

export const addTodoRequestAction = ()=>{
    return {type : ADD_TODO_REQUEST}
}


export const addTodoSuccessAction = (payload)=>{
    return {type : ADD_TODO_SUCCESS , payload}
}

export const addTodoFailureAction = ()=>{
    return {type : ADD_TODO_FAILURE}
}