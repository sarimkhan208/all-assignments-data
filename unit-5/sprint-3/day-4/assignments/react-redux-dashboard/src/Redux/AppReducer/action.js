import axios from "axios"
import { FAILURE, REQUEST,COFFEE_SUCCESS, RESTAURANT_SUCCESS, EMP_SUCCESS } from "./actionType"

export const getCoffeeData = (dispatch) =>{
    
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
    .then((res)=>dispatch({type:COFFEE_SUCCESS,payload:res.data.data}))
    .catch((err)=>console.log(err))
}


export const getRestaurantData = (dispatch) =>{
    
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
    .then((res)=>dispatch({type:RESTAURANT_SUCCESS,payload:res.data.data}))
    .catch((err)=>console.log(err))
}

export const getEmployeeData = (dispatch) =>{
    
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
    .then((res)=>dispatch({type:EMP_SUCCESS,payload:res.data.data}))
    .catch((err)=>console.log(err))
}