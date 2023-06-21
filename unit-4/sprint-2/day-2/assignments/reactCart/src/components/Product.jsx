// import module.css here;
const Product = ({name,price,quantity,id,handleQty}) => {
  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={()=>handleQty(+1,id)} >+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement"  onClick={()=>handleQty(-1,id)} >-</button>
      </div>
    </>
  );
};
export default Product;
