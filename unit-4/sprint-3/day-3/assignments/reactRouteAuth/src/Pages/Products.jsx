import React from 'react'
import {useEffect,useState} from 'react'

export default function AllProducts() {

  const [data,setData] = useState([])

  function fetchData(url){
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
  }

  useEffect(()=>{
    fetchData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
  },[])

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {
            data.map((el)=>(
              <div key={el.id} >
                <h3 className = "name">{el.title}</h3>
                <div className= "brand">{el.brand}</div>
                <div className = "price">{el.price}</div>
            </div>

            ))
          }
      </div>
    </div>
  )
}