import React from "react";
import "./FilterOptions.css";
import { useState } from "react";

function FilterOptions({setSort,setPriceFilter,priceFilter}) {
  
  return (
    <div className="filters">
      <div>
        <p>Sort By</p>
        <select name="sort" onChange={(e)=>setSort(e)}>
          <option value="1">Price (low to high)</option>
          <option value="2">Price (high to low)</option>
          <option value="3">Rating (low to high)</option>
          <option value="4">Rating (high to low)</option>
        </select>
      </div>
      <div>
        <p>Price</p>
        <div className="price-range">
          ₹<input type="number" min="0" name="min" value={priceFilter.min} onChange={(e)=> setPriceFilter(e.target.name,e.target.value)}/>
          <p>-</p>
          ₹<input type="number" min={priceFilter.min} name="max" value={priceFilter.max} onChange={(e)=> setPriceFilter(e.target.name,e.target.value)}/>
        </div>
      </div>
    </div>
  );
}
export default FilterOptions;
