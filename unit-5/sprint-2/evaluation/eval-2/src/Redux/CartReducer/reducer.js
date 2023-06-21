import { ADD_TO_CART } from "./actionTypes"

const initialState = {
    cart: [],
 }

 //go

export const reducer = (state=initialState , {type,payload})=>{
    switch(type){
        case ADD_TO_CART :
            console.log(payload)
        return {...state , cart:[...state.cart , payload]} 
        default : return state
    }
}
