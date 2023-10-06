import React, { useState,useEffect } from 'react'
import './Main.css'
import Categories from './Categories'
import FilterOptions from './FilterOptions'
import Item from './Item'

function Main  ({products}) {
  
  const categoryMap=["","Mobiles","Accessories","Electronics","Men","Women","Furniture"]
  const [category,setCategory]=useState(1);
  const [sort,setSort]=useState("1");
  const [filteredProducts,setFilteredProducts]=useState([products]);

  const [priceFilter,setPriceFilter]=useState({
    min:0,
    max:1000000
  });

  function handleSort(e){
      setSort(e.target.value);
  }
  function handlePrice(name,value){
      if(value>=0){
      setPriceFilter((prevState)=>{
        return {
          ...prevState,
          [name]:value
        }
      })
    }
  }
  
  

  useEffect(()=>{
    const newProducts=products.filter((product)=> product.category==categoryMap[category] && product.price>=priceFilter.min && product.price<=priceFilter.max )
    if(sort=="1")newProducts.sort((a,b)=>a.price-b.price)
    if(sort=="2")newProducts.sort((a,b)=>b.price-a.price)
    if(sort=="3")newProducts.sort((a,b)=>a.rating-b.rating)
    if(sort=="4")newProducts.sort((a,b)=>b.rating-a.rating)
    setFilteredProducts(newProducts);
  },[category,sort,priceFilter]);

  return (
    <div className="home-container">
        <Categories setCategory={setCategory} category={category}/>
        <div className="middle-container">
            <FilterOptions setSort={handleSort} setPriceFilter={handlePrice} priceFilter={priceFilter}/>
            <div className="products">
                {filteredProducts.length>0?filteredProducts.map((product)=><Item key={product.id} product={product} />) : <div className='not-available'>No item available for above filters</div>}
            </div>
        </div>
    </div>
  )
}
export default Main;
