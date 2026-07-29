
import Counter from './components/Counter';
import Toggle from "./components/Toggle";
import CardItem from './components/cardItem'
import { useState } from "react";

function App(){


const[product,setProduct]=useState([
  {id: 1, name: 'keyboard', price: 150, qty: 0},
  {id: 2, name: 'milk', price: 30, qty:0 },
  {id: 3, name: 'mouse', price: 100, qty: 0},
  {id: 4, name: 'bread', price: 25, qty: 0},
]);

function increaseQty(id){
  setProduct(
    product.map(item=>item.id ===id ? {...item, qty: item.qty+1}: item)
 );
}

function decreaseQty(id){
    setProduct(
      product.map(item=>item.id === id ? {...item, qty: Math.max( 0,item.qty-1) }: item)
  );
}

const total= product.reduce((sum,item) =>sum+ item.price * item.qty, 0) ;
 return(
  <div>
      <Counter></Counter>
      <Toggle></Toggle>


    <h2>shopping items</h2>
     {product.map(item =>(
      <CardItem 
      key={item.id}
      name={item.name}
      price={item.price}
      qty={item.qty}
      onIncrease={()=> increaseQty(item.id)}
      onDecrease={()=> decreaseQty(item.id)}
      >
      </CardItem>
    ))}
    <h2>Total=${total}</h2>
  </div>
 )
}
export default App;