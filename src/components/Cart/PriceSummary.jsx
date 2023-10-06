import React from 'react'
import './PriceSummary.css'
import { Link } from 'react-router-dom'

function PriceSummary ({total}){
  return (
    <div className='sticky-pos'>
    <div className="summary">
        <p className="bottom-border">PRICE DETAILS</p>
        <div className="price flex-bet">
            <p>Price (3 items)</p>
            <p>₹{total}</p>
        </div>
        <div className="delivery flex-bet bottom-border">
            <p>Delivery Charges</p>
            <p><span className="cut">₹120</span> <span style={{color: "green"}}>FREE</span></p>
        </div>
        <div className="total flex-bet">
            <p>Total Payable</p>
            <p>₹{total}</p>
        </div>
    </div>
    <Link to="/checkout">
      <button className='ship-detail-btn'>Add Shipping Details</button>
    </Link>
    </div>
  )
}
export default PriceSummary