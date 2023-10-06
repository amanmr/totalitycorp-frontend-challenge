import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import  Main from "./components/Homepage/Main";
import './App.css'
import MainCart from "./components/Cart/MainCart";
import products from "./products";
import { useState } from "react";
import Checkout from "./components/Cart/Checkout";

export const cartContext=React.createContext(); 

function App() {
  const [cart,setCart]=useState([]);
  const [totalPrice,setTotalPrice]=useState(0);

  function removeCartItem(id){
      //filtered out item whose id is provided
      const newCart=cart.filter((item)=>item.id!=id);
      setCart(newCart)
  }

  //function to check if the item already exists in cart
  function addToCart(item){
    const itemInCart=cart.find((product)=>product.id===item.id)
    if(itemInCart===undefined) setCart((prevState)=>[...prevState,item])
  }

  //function to handle increase or decrease the count of an item in cart
  function upDownCount(isUP,id){
      const newCart=cart.map((item)=>{
        if(item.id==id){
          if(isUP) item.count=item.count+1;
          else if(item.count>1) item.count=item.count-1;
        }
        return item;
      })
      setCart(newCart);
  }
  
  return (
    <>
    <Navbar count={cart.length}/>
    <div className="margin-top">
      <cartContext.Provider value={{cart:cart,setCart:addToCart,remove:removeCartItem,upDown:upDownCount,setTotal:setTotalPrice}}>
        <Routes>
          <Route path="/"  element={<Main products={products} />} />
          <Route path="/cart"  element={<MainCart />} />
          <Route path="/checkout"  element={<Checkout total={totalPrice} setCart={setCart}/>} />
        </Routes>
      </cartContext.Provider>
    </div>
    </>
  )
}

export default App;
