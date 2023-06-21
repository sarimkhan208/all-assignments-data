// import { POST_FAILURE, POST_REQUEST, POST_SUCCESS } from "./actionType"

import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

let initialState = {
    isLoading:false,
    isError : false,
    products : []
}

export const reducer = (state=initialState , {type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST :
        return {...state , isLoading : true}
        case ADD_PRODUCT_SUCCESS:
        return {...state , isLoading : false}
        case PRODUCT_FAILURE :
        return {...state , isLoading : false , isError:true}
        case GET_PRODUCT_SUCCESS :
        return {...state , isLoading:false , products : [...payload]}
        case PATCH_PRODUCT_SUCCESS :
        return {...state , products : [...state.products , payload]}
        default : return state
    }
}