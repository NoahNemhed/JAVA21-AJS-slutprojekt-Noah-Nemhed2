
import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './modules/Header';
import Cart from './modules/Cart';
import Main from './modules/main';
import productData from "./modules/productData"
import { BrowserRouter as Router, Route, Switch, useLocation  } from 'react-router-dom';
function App() {
  const [LoggedIn, setLoggedIn] = useState(false)
  const [CheckOut, setCheckOut] = useState(false)
  const { products } = productData
  const [cartItems, setCartItems] = useState([]);

  const AddItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const AddItemInput = (product, value) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + value } : x
        )
      );
      alert(value + " Has been added to cart!")
  }else {
    setCartItems([...cartItems, { ...product, qty: value }]);
    alert(value + " Has been added to cart!")
  }
} 
  const RemoveItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  let name = '';
  const [stateName, setStateName] = useState('');

  function setName(){
    setStateName(name);
    setLoggedIn(true);
  }

  function LogOutSetCheckOut(){
    setCheckOut(false)
    setLoggedIn(false)
  }

   function handleChange(event) {
      name = event.target.value;
  }

  if(CheckOut){
    return(
      <div>
          <Header></Header>
          <Cart RemoveItem={RemoveItem} AddItem={AddItem} cartItems={cartItems} AddItemInput={AddItemInput}></Cart>
          <div>
            <button className='btn' onClick={LogOutSetCheckOut}>Logout</button>
          </div>
      </div>

    )
  }

if(!LoggedIn){
  return(
    <form className='login-form'>
    <input required type="text" placeholder="Enter your name" onChange={handleChange}></input>
    <button onClick={() => setName()}>Submit</button>
  </form>
  )
} 
    return (
      <div className='App'>
        <Header countCartItems={cartItems.length} ></Header>
        <div className='row'>
        <Main AddItem={AddItem} products={products} AddItemInput={AddItemInput}></Main>

        </div>

        <div>
            <form className='btn-form'>
            
            <button className='Logout' onClick={() => setLoggedIn(false)}>Logout</button>

            <button className='btn' onClick={() => setCheckOut(true)}>Check Out</button>
          </form>
          <h1 className='Welcome-text'>Welcome {stateName}!</h1>
        </div>
     </div>
      
    )
 

 
  }





export default App
