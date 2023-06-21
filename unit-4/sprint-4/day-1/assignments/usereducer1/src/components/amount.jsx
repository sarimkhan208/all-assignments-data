import { useReducer } from "react";

export default function Amount(){
    function reducerFn(state,{type,payload}){
        switch(type){
            case "INCREMENT_AMOUNT" : {
                return state+payload
            }
            case "DECREMENT_AMOUNT" : {
                return state-payload
            }
            default:{
                return state
            }
        }
    }

    const [state,dispatch] = useReducer(reducerFn,0)



    return <div>
        <h1>Amounts : {state}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT_AMOUNT",payload:100})} >INCREMENT_AMOUNT</button>
        <button onClick={()=>dispatch({type:"DECREMENT_AMOUNT",payload:100})} >DECREMENT_AMOUNT</button>
    </div>



}