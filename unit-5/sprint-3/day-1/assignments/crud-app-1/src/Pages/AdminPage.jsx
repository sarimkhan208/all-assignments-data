

import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addProduct } from "../Redux/ProductReducer/action"

const initialState = {
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    gender:""

}
export default function Admin(){

    const [product,setProduct] = useState(initialState)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name , value} = e.target
        setProduct((prev)=>{
            return {...prev , [name]:value}
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct(initialState)
    }

    return <DIV>
        <h2>Add the Product</h2>
        <form onSubmit={handleSubmit} >
        <input  type='text' value={product.image}  name="image" placeholder="Image" onChange={(e)=>handleChange(e)} />
        <input  type='text' value={product.title}name="title" placeholder="Title"  onChange={(e)=>handleChange(e)}/>
        <input  type='text' value={product.price}name="price" placeholder="Price"  onChange={(e)=>handleChange(e)}/>
        <input  type='text' value={product.brand}name="brand" placeholder="Brand"  onChange={(e)=>handleChange(e)}/>
        <input  type='text' value={product.discount}name="discount" placeholder="Discount" onChange={(e)=>handleChange(e)}/>
        <select name="gender" onChange={(e)=>handleChange(e)} >
            <option value="" >Select Gender</option>
            <option value="male" >Men</option>
            <option value="female" >Women</option>
            <option value="kids" >Kids</option>
        </select><br/>
        <button type='submit' >SUBMIT</button>
        </form>
    </DIV>
}







const DIV = styled.div`
    width: 400px;
    margin: 40px auto;
    border : 1px solid black;
    padding: 20px;

    input{
        width: 80%;
        height: 40px;
        font-size: large;
    }

    button{
        width: 20%;
        height: 35px;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }

`

