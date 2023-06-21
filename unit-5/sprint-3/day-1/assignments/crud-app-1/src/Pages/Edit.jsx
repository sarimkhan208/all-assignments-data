
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { patchProducts } from "../Redux/ProductReducer/action"

export default function Edit(){
    const dispatch = useDispatch()
    const [data,setData] = useState("")
    const {id} = useParams()
    const products = useSelector((state)=>state.productReducer.products)
    console.log(products)
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData(prev=>{
            return {...prev ,[name]:value}
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(patchProducts(data,id))
        console.log(data)

    }

    useEffect(()=>{
        const data = products.find((el)=>el.id === +id)
        setData(data)
    },[])

    // console.log(data)

    


    return <DIV>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} >
            <input  type="text"  name={"image"} value ={data.image} onChange={handleChange}/>
            <input  type="text" name={"title"} value ={data.title} onChange={handleChange}/>
            <input  type="number" name={"price"} value ={data.price} onChange={handleChange}/>
            <input  type="text" name={"brand"} value ={data.brand} onChange={handleChange}/>
            <input  type="text" name={"discount"} value ={data.discount} onChange={handleChange}/>
            <select name={"gender"} value ={data.gender} onChange={handleChange} >
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
