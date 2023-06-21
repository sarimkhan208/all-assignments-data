import { useEffect } from "react";
import {useDispatch, useSelector , } from 'react-redux'
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
export const ProductList = () => {

  const products = useSelector((state)=>state.productReducer.products)
  // console.log(products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts)
  },[])
  return (
    <div data-testid="product-list" style={{display: 'grid',  gridTemplateColumns:'repeat(4,1fr)'}}>
      {/* Map through products with ProductCard component  */}
      {
        products.length>0 && products.map((el)=>(
          <div key={el.id}  >
            <ProductCard id={el.id} image={el.images[0]} title={el.title} brand={el.brand} price={el.price} discount={el.discountPercentage} />
          </div>
        ))
      }
    </div>
  );
};
