import { useSelector } from "react-redux";
import { ProductCard } from "../Components/ProductCard";

export const CartPage = () => {
  const products = useSelector((state)=>state.cartReducer.cart)
  // console.log(cart)
  return <div data-testid="cart-list" style={{display: 'grid',  gridTemplateColumns:'repeat(4,1fr)'}}>
    {
        products.length>0 && products.map((el)=>(
          <div key={el.id}  >
            <ProductCard id={el.id} image={el.images[0]} title={el.title} brand={el.brand} price={el.price} discount={el.discountPercentage} />
          </div>
        ))
      }
  </div>;
};
