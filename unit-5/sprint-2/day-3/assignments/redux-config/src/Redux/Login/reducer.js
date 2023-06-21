import { getData, setData } from "../../utils/LSData"
import { AUTH_FALSE, AUTH_SUCCESS, AUTH_TRUE } from "./actionType"

let initialState = {
    isAuth : getData("isAuth") || false 
}


export const reducer = (state=initialState,{type,payload})=>{
    console.log(initialState.isAuth)
    switch(type){
        case AUTH_TRUE : 
        setData("isAuth" , payload)
        return {...state , isAuth : payload}

        case AUTH_FALSE : 
        setData("isAuth" , payload)
        return {...state , isAuth : payload}
        default : return state
    }
}