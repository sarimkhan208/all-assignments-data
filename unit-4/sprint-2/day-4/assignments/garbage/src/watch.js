import { useState,useEffect } from "react"

export default function Timer(){

    const [count,setCount] = useState(5)
    useEffect(()=>{
        console.log("useEffect")
        let intervalId = setInterval(()=>{
            console.log("setINervl")
            setCount((prevCount)=>{
                if(prevCount<=1){
                    clearInterval(intervalId)
                    return 0
                }
                return prevCount-1
            })
        },1000)
        const cleanUp = ()=>{
            clearInterval(intervalId)
        }
        return cleanUp
    },[])
    return <h1>Timer : {count}</h1>

}


