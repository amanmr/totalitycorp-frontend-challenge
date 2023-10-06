import React from 'react'
import './CartItem.css'
import { cartContext } from '../../App'
import { useContext } from 'react'
function CartItem ({product}){
    const cartCont=useContext(cartContext)
    const upDownFun=cartCont.upDown;

  return (
    <div className="cart">
        <div className="cart-image">
            <img src={product.image} alt="shoe"/>
        </div>
        <div className="cart-data">
            <div>
                <p className="item-name">{product.name}</p>
                <p className="item-price">₹{product.price}</p>
            </div>
            <div className="edit-item">
                <p onClick={()=>cartCont.remove(product.id)}>REMOVE</p>
                <div>
                    <button onClick={()=>upDownFun(false,product.id)}>-</button>
                    <p className="quantity">{product.count}</p>
                    <button onClick={()=>upDownFun(true,product.id)}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CartItem
