import React from "react";
import Stock from "./Stock";

function StockContainer({ currentStocks, handleBuyStock, alphaChecked, priceChecked, stockType}) {

  const sortDisplay = alphaChecked === true ? currentStocks.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      } 
      if (fa > fb) {
        return 1;
      } 
      return 0;
      }) : currentStocks.sort((a, b) => {
        let fa = a.price,
            fb = b.price;
        return fb - fa;
      });

  const stockTypeFilter = sortDisplay.filter((stock) => stockType === stock.type || stockType === "All")  

  const stockDisplay = stockTypeFilter.map((stock) => {

    return (
      <Stock key={stock.id} stock={stock} handleBuyStock={handleBuyStock}/>
    )
  })
  
  return (
    <div>
      <h2>Stocks</h2>
      {stockDisplay}
    </div>
  );
}

export default StockContainer;
