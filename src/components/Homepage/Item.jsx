import React from 'react'
import './Item.css'
import { useState,useContext } from 'react'
import { cartContext } from '../../App'
function Item ({product}) {

  const cartBoth=useContext(cartContext);
  const addToCart=cartBoth.setCart;
  const cartItems=cartBoth.cart;
  const [isAdded,setIsAdded]=useState(false)

  cartItems.forEach(item => {
    if(item.id==product.id && !isAdded) setIsAdded(true);
  });
  
  return (
    <div className="item">
            <div className="review">
                <p>{product.rating}</p>
                <svg xmlns="http://www.w3.org/2000/svg"  height="0.8rem" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            </div>
            <div className="image">
                <img src={product.image} alt="shoe"/>
            </div>
            <div className="content">
                <p>{product.name}</p>
                <p><b>₹{product.price}</b></p>
            </div>
            <button onClick={(e)=>addToCart({...product,count:1})}>
                  {!isAdded?"Add to cart":"Added"}
            </button>
    </div>
  )
}
export default Item
