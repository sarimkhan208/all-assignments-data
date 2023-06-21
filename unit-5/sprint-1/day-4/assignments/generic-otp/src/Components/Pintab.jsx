import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'
import Pin from "../Pin"

export default function Pintab({length,maxChar,setOtp}){

    const [pintabLength] = useState(new Array(length).fill(0))
    const [pintabValue] = useState(new Array(length).fill(0))
    const inputRef = useRef([])
    
    

    const changeHandler = (e,index)=>{
        pintabValue[index] = e.target.value
        if(index<length-1 && e.target.value.length == maxChar ){
            inputRef.current[index+1].focus()
        }
        setOtp(pintabValue.join(""))
    }

    const handleBackSpace = (e,index)=>{
        pintabValue[index] = e.target.value
        if(index>0 && e.target.value.length==0){
            inputRef.current[index-1].focus()
        }
        setOtp(pintabValue.join(""))
    }

    

    useEffect(()=>{
        inputRef.current[0].focus()
    },[])


    return <div>
    {
        pintabLength.map((el,index)=>{
            return (
            <Pin maxChar={maxChar}
            key={index}
            ref={(elem)=>{
                inputRef.current[index] = elem
            }}
            forOnChange={(e)=>changeHandler(e,index) }
            forBackSpace = {(e)=>handleBackSpace(e,index)}
            />
            
            )
        })
    }
    </div>
}

Pintab.propTypes = {
    length : PropTypes.number.isRequired,
    maxChar : PropTypes.number
}