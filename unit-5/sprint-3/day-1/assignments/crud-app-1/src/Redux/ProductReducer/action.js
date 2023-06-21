import axios from 'axios'
import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from './actionType'


export const addProduct = (obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post(`http://localhost:8080/products`,obj)
    .then((res)=>dispatch({type:ADD_PRODUCT_SUCCESS}))
    .catch((err)=>dispatch({type:PRODUCT_FAILURE}))
}


export const getProducts = (obj)=> (dispatch) =>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`http://localhost:8080/products`,obj)
    .then((res)=>dispatch({type:GET_PRODUCT_SUCCESS , payload : res.data}))
    .catch((err)=>dispatch({type:PRODUCT_FAILURE}))
}

export const patchProducts = (obj,id) => (dispatch) =>{
    dispatch({type:PRODUCT_REQUEST})
    axios.patch(`http://localhost:8080/products/${id}`,obj)
    .then((res)=>dispatch({type:PATCH_PRODUCT_SUCCESS , payload:res.data}))
    .catch((err)=>dispatch({type:PRODUCT_FAILURE}))
}