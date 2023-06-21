import { AUTH_FAILED, AUTH_FALSE, AUTH_REQUEST, AUTH_SUCCESS, AUTH_TRUE } from "./actionType"


export const authTrue = (payload)=>{
    return {type : AUTH_TRUE , payload}   
}
export const authFalse = (payload)=>{
    return {type : AUTH_FALSE,payload}   
}