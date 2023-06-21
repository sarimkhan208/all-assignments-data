import { CRITICAL, LOW, MEDIUM,MAJOR } from "./actionType"

export const postcritical = (data)=>(dispatch)=>{
    dispatch({type:CRITICAL,payload:data})
}

export const postmajor = (data)=>(dispatch)=>{
    dispatch({type:MAJOR,payload:data})
}


export const postmedium = (data)=>(dispatch)=>{
    dispatch({type:MEDIUM,payload:data})
}

export const postlow = (data)=>(dispatch)=>{
    dispatch({type:LOW,payload:data})
}