import React from 'react'
import './Purchased.css'
function Purchased() {
  return (
    <div className="purchased">
        <p>Thankyou for your purchase <svg xmlns="http://www.w3.org/2000/svg"  height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg></p>
        <p>Happy Shopping! </p>
    </div>
  )
}

export default Purchased