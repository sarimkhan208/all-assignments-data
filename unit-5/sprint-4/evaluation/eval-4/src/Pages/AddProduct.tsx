import React from "react";
import {useState} from 'react'
import { addProduct } from "../api";
import { Navbar } from "../Components/Navbar";


export const AddProduct = () => {
  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [brand,setBrand] = useState("")
  const [price,setPrice] = useState("")

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault()
    // const obj : ProductInterface = {
    //   name,
    //   image,
    //   brand,
    //   price,
    //   like:0,
    //   dislike:0
    // }
    addProduct(name,image,brand,price)
  }
  return (
   
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} >
        <input type='text' className="product-name" placeholder="name" value={name} name="name" onChange={(e)=>setName(e.target.value)} />
        <input type='text' className="product-image" placeholder="image" value={image} name="image" onChange={(e)=>setImage(e.target.value)} />
        <input type='text' className="product-brand" placeholder="brand" value={brand} name="brand" onChange={(e)=>setBrand(e.target.value)} />
        <input type='text' className="product-price" placeholder="price" value={price} name="price" onChange={(e)=>setPrice(e.target.value)} />
       
        <button className="submit-form" type="submit" >Submit</button>
      </form>
    </div>
  );
};
