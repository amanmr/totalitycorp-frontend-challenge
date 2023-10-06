import React, { useState } from 'react'
import './Categories.css'
function Categories({category,setCategory}) {

  const categoryMap=["","Mobiles","Accessories","Electronics","Men","Women","Furniture"]
  const [showMenu,setShowMenu]=useState(false)
  function handleClick(e){
    const categoryCurr=e.target.innerText;
    switch(categoryCurr){
      case "Mobiles":setCategory(1);
      setShowMenu(false);
      break;
      case "Accessories":setCategory(2);
      setShowMenu(false);
      break;
      case "Electronics":setCategory(3);
      setShowMenu(false);
      break;
      case "Men":setCategory(4);
      setShowMenu(false);
      break;
      case "Women":setCategory(5);
      setShowMenu(false);
      break;
      case "Furniture":setCategory(6);
      setShowMenu(false);
      break;
    }
  };
  return (
    <ul className={showMenu?"categories":"categories menu-mobile"} onClick={(e)=>handleClick(e)}>
        <li className="responsive-category" id={"selected-category"}>{categoryMap[category]}</li>
        <li id={!showMenu && category==1 && "selected-category"}>Mobiles</li>
        <li id={!showMenu && category==2 && "selected-category"}>Accessories</li>
        <li id={!showMenu && category==3 && "selected-category"}>Electronics</li>
        <li id={!showMenu && category==4 && "selected-category"}>Men</li>
        <li id={!showMenu && category==5 && "selected-category"}>Women</li>
        <li id={!showMenu && category==6 && "selected-category"}>Furniture</li>
        <div className="menu-icon" onClick={()=>setShowMenu((prev)=>!prev)}>
          <svg xmlns="http://www.w3.org/2000/svg"  height="1.5rem" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
    </ul>
  )
}
export default Categories;