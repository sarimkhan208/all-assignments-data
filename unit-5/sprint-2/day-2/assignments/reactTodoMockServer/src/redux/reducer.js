import { ADD_TODO_FAILED, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

export const reducer = (state , {type , payload})=>{
    switch(type){

        case GET_TODO_REQUEST : return {
            ...state , isLoading : true
        }
        case GET_TODO_SUCCESS : return {
            ...state , isLoading : false , todos : [...payload]
        }
        case GET_TODO_FAILED : return {
            ...state , isLoading : false , isError : true
        }
        case ADD_TODO_REQUEST : return {
            ...state , isLoading : true
        }
        case ADD_TODO_SUCCESS : return {
            ...state , isLoading : false , todos : [...state.todos , payload]
        }
        case ADD_TODO_FAILED : return {
            ...state , isLoading : false , isError : true
        }

        default : return state
    }
}