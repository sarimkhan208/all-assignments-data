import React, { useEffect, useRef, useState } from "react";
import { Pin } from "./Pin";
import PropTypes from 'prop-types'

export const PinTab = ({ length, maxChar, setOtp }) => {

  const [pintabLength] = useState(new Array(length).fill(0))
  const [pinTabValue] = useState(new Array(length).fill(0))
  const inputRef = useRef([])

  const handleChange = (e,index)=>{
    pinTabValue[index] = e.target.value
    if(index < length-1 && maxChar === e.target.value.length){
      inputRef.current[index+1].focus()
    }
    setOtp(pinTabValue.join(""))
  }


  const handleBackSpace = (e,index)=>{
    pinTabValue[index] = e.target.value
    if(index>0 && e.target.value == 0){
      inputRef.current[index-1].focus()
    }
    setOtp(pinTabValue.join(""))
  }

  const handlePaste = (e)=>{
    const data = e.clipboardData.getData("text")
    .split("")
    .filter((item,index)=>index<maxChar*length)
    let value=[]
    
    for(let i=0; i<length*maxChar; i+=maxChar){
      let temp=""
      for(let j=i; j<maxChar+i; j++){
        temp+=data[j]
      }
      value.push(temp)
    }

    value.forEach((character,index)=>{
      pinTabValue[index] = character;
      inputRef.current[index].value = character
      if(index<length-1){
        inputRef.current[index+1].focus()
      }
      setOtp(pinTabValue.join(""))
    })
  }


  useEffect(()=>{
    inputRef.current[0].focus()
  },[])

  return <div data-testid="pin-tab" onPaste={handlePaste} >
    {
      pintabLength.map((el,index)=>{
        return (<Pin 
            key={index}
            ref = {(elem)=>inputRef.current[index] = elem}
            maxChar={maxChar}
            forOnChange={(e)=>handleChange(e,index)}
            forBackSpace = {(e)=>handleBackSpace(e,index)}
          />)
      })
    }
  </div>;
};

PinTab.propTypes = {
  length : PropTypes.number.isRequired,
  maxChar : PropTypes.number
}

// Check length and maxChar props here
