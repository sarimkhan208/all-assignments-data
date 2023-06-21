import React from "react";
import { forwardRef } from "react";
import PropTypes from 'prop-types'

export const Pin = forwardRef(({ forBackSpace, maxChar , forOnChange },ref) => {
  const handleKeyUp = (e)=>{
    if(e.keyCode === 8){
      forBackSpace(e)
    }else{
      forOnChange(e)
    }
  }
  return <input 
  data-testid="pin-input" 
  onKeyUp={handleKeyUp}
  ref={ref}
  maxLength={maxChar}
  />;
});




// Check maxChar prop here

Pin.propTypes = {
  maxChar : PropTypes.number.isRequired
}