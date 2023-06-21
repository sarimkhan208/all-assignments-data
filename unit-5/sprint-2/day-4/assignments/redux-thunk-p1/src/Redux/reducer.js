import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_SUCCESS } from "./actionType"

const initialState = {
    isLoading : false,
    isError : false,
    todos : []
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS_REQUEST : 
        return {...state , isLoading : true}
        case GET_TODOS_SUCCESS : 
        return {...state , isLoading : false , todos : [...payload]}
        case GET_TODOS_FAILURE : 
        return {...state , isLoading : false , isError : true}

        case POST_TODOS_SUCCESS :
        return {...state , isLoading : false}
        default : return state

    }
}