import { GET_QUESTIONS } from "./actionType"

let initailState = {
    questions : []
}


export const reducer = (state=initailState , {type,payload})=>{
    
    switch(type){
        case GET_QUESTIONS : return  {
            ...state ,  questions : [...payload]
        }
        default : return state
    }
}