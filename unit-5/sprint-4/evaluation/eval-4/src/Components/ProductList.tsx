import React from "react";
import {useState} from "react"
interface ProductInterface{
  name:string,
  image:string,
  price:string,
  brand:string,
  like:number,
  dislike:number
}
const ProductList = () => {
  const [products, setProducts] = useState([]);
  // setProducts(data)
  

  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */}
    </div>
  );
};

export default ProductList;
