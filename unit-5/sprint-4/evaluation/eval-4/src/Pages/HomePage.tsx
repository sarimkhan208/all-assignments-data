import React from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import {useState,useEffect} from 'react'
import axios from "axios";
import { getProducts } from "../api";
export const HomePage = () => {
  
  const [data,setData] = useState([])
  useEffect(()=>{
    
     
    getProducts().then((res)=>setData(res))
    
  },[])
  console.log(data)
  
 
  return (
    <div>
      <Navbar name={"strin"} />
      <ProductList name={"strin"} />
    </div>
  );
};
