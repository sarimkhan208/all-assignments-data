import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoffeeData } from '../Redux/AppReducer/action'

export default function CoffeeData() {

  const dispatch = useDispatch()
  const coffee = useSelector((state)=>state.coffeeData)
  
  useEffect(()=>{
    dispatch(getCoffeeData)
  },[])
  
  
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont" >
        {/* map the below div against your coffee data */}
        {
          coffee.length>0 && coffee.map((el)=>(
            <div className = "coffee-item"  key={el.id} >
              <img className = "image" src={el.image} alt = "img" width = "70%" />
              <div className = "title">{el.title}</div>
              <div className = "price">{el.price}</div>
            </div>
          ))
        }
        
    </div>
   </div>
   
  )
}