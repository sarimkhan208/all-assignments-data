import { useEffect } from "react"
import { getProducts } from "../Redux/ProductReducer/action"
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from "./ProductCard"
import { useLocation, useSearchParams } from "react-router-dom"
export default function ProductList(){
    const [params] = useSearchParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const {products} = useSelector((state)=>state.productReducer)
    
    let obj = {
        params : {
            gender : params.getAll("category"),
            _sort : params.get('order') && "price",
            _order : params.get('order')
            
        }       
    }

    useEffect(()=>{
        dispatch(getProducts(obj))
    },[location])
    return <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}} >
        {
            products.length>0 && products.map((el)=>(
            <ProductCard
            key={el.id} 
            image={el.image} 
            title={el.title} 
            brand={el.brand} 
            discount={el.discount} 
            price={el.price} 
            gender={el.gender} 
            id={el.id}/>))
        }
    </div>
}