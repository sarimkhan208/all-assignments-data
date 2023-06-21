import { useEffect, useState } from "react"
import {useSearchParams} from 'react-router-dom'
export const Sidebar = ()=>{
    
    
    
    const [params,setParams] = useSearchParams()
    const initialCategory = params.getAll("category")
    
    const inititalOrder = params.get("order")
    
    const [category,setCategory] = useState(initialCategory || [])
    const [order,setOrder] = useState( inititalOrder || "")

    const handleChange = (e)=>{
        let newCategory = [...category]
        const value = e.target.value
        if(newCategory.includes(value)){
            newCategory = newCategory.filter((el)=>el!==value)
        }else{
            newCategory.push(value)
        }
        setCategory(newCategory)
    }

    const handleSort = (e)=>{
        setOrder(e.target.value)
    }


    useEffect(()=>{
        let params = {
            category
        }
        order && (params.order=order)
        setParams(params)
    },[category,order])

    return(
        <div>
            <h3>Filter by</h3>
            <div>
                <input type='checkbox' value={'male'} onChange={handleChange} checked={category.includes("male")}/>
                <label>Men</label>
            </div>
            <div>
                <input type='checkbox' value={'female'} onChange={handleChange} checked={category.includes("female")}/>
                <label>Women</label>
            </div>
            <div>
                <input type='checkbox' value={'kids'} onChange={handleChange} checked={category.includes("kids")}/>
                <label>Kids</label>
            </div>

            <div onChange={handleSort}>
                <h3>Sorting</h3>
                <label>Ascending</label>
                <input type='radio' name="sorting" value={"asc"} defaultChecked={order==="asc"}/>
                <label>Descending</label>
                <input type='radio' name="sorting" value={"desc"} defaultChecked={order==="desc"}/>
            </div>

        </div>

    )
}