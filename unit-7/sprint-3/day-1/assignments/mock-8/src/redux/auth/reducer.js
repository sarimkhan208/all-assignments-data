import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"

let initailState = {
    userDetail : "",
    isAuth : false
}

export const reducer = (state=initailState,{type,payload})=>{
    
    switch(type){
        case LOGIN_SUCCESS : return  {
            ...state ,  isAuth : true , userDetail :payload
        }
        case LOGIN_FAILURE : return  {
             isAuth : false
        }
        default : return state
    }

}