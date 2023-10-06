import React from 'react'
import './Checkout.css'
import { useState } from 'react';
import Purchased from './Purchased';
function Checkout({total,setCart}) {
  const [payment,setPayment]=useState(false);
  return !payment?(
    <div className="address-container">
        <form action="#" className="shipping" onSubmit={(e)=>{
              e.preventDefault();
              setCart([]);
              setPayment(true);
            }}>
            <p className="ship">Shipping Details</p>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="mobile" placeholder="Mobile Number"/>
            <input type="text" name="pincode" placeholder="Pincode"/>
            <input type="text" name="locality" placeholder="Locality"/>
            <textarea placeholder="Address" name="address"></textarea>
            <input type="text" name="city" placeholder="City"/>
            <input type="text" name="state" placeholder="State"/>
            <p className="ship">Payment Details</p>
            <label for="payment-mode">
                <input className="pay-upi" type="radio" name="payment-mode" value="upi"/>UPI
            </label>
            <input className="text-upi" type="text" name="upi" placeholder="Enter upi id"/>
            <label for="payment-mode">
                <input className="pay-cod" type="radio" name="payment-mode" value="cod"/>Cash on delivery
            </label>
            <p className="total-cost">Total Amount - ₹{total}</p>
            <button type="submit">Place order</button>
        </form>
    </div>
  ):<Purchased />
}
export default Checkout;
