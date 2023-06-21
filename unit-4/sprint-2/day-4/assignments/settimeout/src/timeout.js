
import { useState,useEffect } from "react"
export default function Timeout(){

    const [count,setCount] = useState(5)
    useEffect(()=>{
        let interval = setTimeout(()=>{
            setCount((prev)=>{
                if(prev<1){
                    clearInterval(interval)
                }
                return prev-1
            })
        },1000)

        const cleanUp = ()=>{
            clearInterval(interval)
        }
        return cleanUp
    },[count])


    return <h1>Timer : {count}</h1>
}