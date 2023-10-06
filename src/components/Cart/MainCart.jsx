import React,{useContext} from 'react'
import './MainCart.css'
import CartItem from './CartItem'
import PriceSummary from './PriceSummary'
import Checkout from './Checkout'
import { cartContext } from '../../App'

function MainCart() {

  let totalprice=0;
  const cartItems=useContext(cartContext);
  const cartProducts=cartItems.cart;
  cartProducts.forEach(product => {
    totalprice+=product.price*product.count;
    cartItems.setTotal(totalprice)
  });
  
  return (
    <div className="main-cart">
        <div className="cart-items">
          {totalprice!=0?cartProducts.map((product)=><CartItem key={product.id} product={product}/>):<p className='empty-cart'>Your cart is empty</p>}
        </div>
        {totalprice>0 && <div className="summary-cart">
            <PriceSummary total={totalprice}/>
        </div>}
    </div>
  )
}

export default MainCart