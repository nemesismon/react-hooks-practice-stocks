import React from "react";

function SearchBar({ handleAlphaSort, alphaChecked, handlePriceSort, priceChecked, handleSortType }) {

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaChecked}
          onChange={handleAlphaSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={handleAlphaSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select 
          placeholder="All"
          onChange={handleSortType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
