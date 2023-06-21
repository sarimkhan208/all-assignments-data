import React from 'react'
import style from './button.module.css'
const Button = ({size,color,children}) => {
  return (
    <button data-testid='custom-hook' className={`${style[color]}  ${style[size]} `} >
        {children}
    </button>
  )
}

export default Button
