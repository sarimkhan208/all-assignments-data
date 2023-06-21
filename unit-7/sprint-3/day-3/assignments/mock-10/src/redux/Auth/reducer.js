import { ISAUTH } from "./actionType"

const initailState = {
    isAuth : false
}

export const reducer = (state=initailState,{type})=>{
    switch(type){
        case ISAUTH : return {...state , isAuth : true}
        default : return state
    }
}