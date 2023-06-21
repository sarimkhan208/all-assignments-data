import { useReducer, useState } from "react";

export default function Amount(){
    const [inc,setInc] = useState("")
    const [dec,setDec] = useState("")

    function reducerFn(state,{type,payload}){
        switch(type){
            case "inc":{
                return state+payload
            }
            case "dec":{
                return state-payload
            }
        }
    }


    const [state,dispatch] = useReducer(reducerFn,0)


    return <div>
        <h1>Amount : {state}</h1>
        <input type="number" onChange={(e)=>setInc(e.target.value)} />
        <button onClick={()=>dispatch({type:"inc",payload:Number(inc)})} >INC</button>
        <br/>
        <br/>
        <input type="number" onChange={(e)=>setDec(e.target.value)}/>
        <button  onClick={()=>dispatch({type:"dec",payload:Number(dec)})} >DEC</button>
    </div>

}