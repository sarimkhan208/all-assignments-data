import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from 'axios'
export const getProductRequest = ()=>{
  return {type : GET_PRODUCT_REQUEST}
}

export const getProductSuccess = (payload)=>{
  return {type : GET_PRODUCT_SUCCESS,payload}
}
export const getProductFailure = ()=>{
  return {type : GET_PRODUCT_FAILURE}
}








export const getProducts = (dispatch) => {
  // Complete get products functionality here
  dispatch(getProductRequest())
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
  .then((res)=>dispatch(getProductSuccess(res.data)))
  .catch((err)=>dispatch(getProductFailure()))
  
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
