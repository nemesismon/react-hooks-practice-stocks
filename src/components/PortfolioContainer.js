import React from "react";

function PortfolioContainer({purchasedStock, handleSellStock, alphaChecked, stockType}) {

  const sortDisplay = alphaChecked === true ? purchasedStock.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      } 
      if (fa > fb) {
        return 1;
      } 
      return 0;
      }) : purchasedStock.sort((a, b) => {
        let fa = a.price,
            fb = b.price;
        return fb - fa;
      });

  const stockTypeFilter = sortDisplay.filter((stock) => stockType === stock.type || stockType === "All")
  
  const displayPurchasedStock = stockTypeFilter.map((stock) => {
    return (
      <div>
      <div className="card">
        <div className="card-body" onClick={() => handleSellStock(stock)}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
    })
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPurchasedStock}
    </div>
  );
}

export default PortfolioContainer;
