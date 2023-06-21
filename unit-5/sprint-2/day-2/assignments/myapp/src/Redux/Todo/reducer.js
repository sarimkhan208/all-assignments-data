import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType";

export default function reducer(state , {type,payload}){
    switch(type){

        case GET_TODO_REQUEST : 
        return {...state , isLoading : true}

        case GET_TODO_SUCCESS : 
        return {...state , isLoading : false , todos : [...payload]}

        case GET_TODO_FAILURE : 
        return {...state , isLoading : false, isError : true}

        case ADD_TODO_REQUEST : 
        return {...state , isLoading : true}

        case ADD_TODO_SUCCESS : 
        return {...state , isLoading : false , todos : [...state , payload]}

        case ADD_TODO_FAILURE : 
        return {...state , isLoading : false, isError : true}

        default :  return state
    }
}