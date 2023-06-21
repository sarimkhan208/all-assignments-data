import "./App.css";



import Product from './components/Product'
import { useState } from "react";
function App() {
  let sum=0
  let data1=[{id:1,name:"Noodles",price:30,quantity:1},{id:2,name:"Biryani",price:90,quantity:1},{id:3,name:"Chips",price:10,quantity:1}]
  data1.map((el)=>sum+=el.quantity*el.price)
  const [data,setData]=useState(data1)

  const [total,setTotal]=useState(sum)
  const handleQty = (value,id)=>{

    setData(data?.map((el)=>{
    
      if(el.id==id){
        return {
          ...el,
          quantity:el.quantity+value
        }
      }
      return el
    }))
    let sum1=0
    data.map((el)=>sum1+=el.quantity*el.price)
    setTotal(sum1)
  }
  
  
  

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {data.length&& data?.map((el)=>(
          <Product key={el.id} id={el.id} price={el.price} quantity={el.quantity} name={el.name} handleQty={handleQty} />
        ))}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {total}
      </h1>
    </div>
  );
}

export default App;
