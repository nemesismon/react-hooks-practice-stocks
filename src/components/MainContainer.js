import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ currentStocks, purchasedStock, handleBuyStock, handleSellStock, handleAlphaSort, alphaChecked, handlePriceSort, pricedChecked }) {

  const [stockType, setStockType] = useState("All")

  const handleSortType = (event) => {
    console.log(event.target.value)
    setStockType(event.target.value)
  }

  return (
    <div>
      <SearchBar handleAlphaSort={handleAlphaSort} alphaChecked={alphaChecked} handlePriceSort={handlePriceSort} pricedChecked={pricedChecked} handleSortType={handleSortType}/>
      <div className="row">
        <div className="col-8">
          <StockContainer currentStocks={currentStocks} handleBuyStock={handleBuyStock} alphaChecked={alphaChecked} pricedChecked={pricedChecked} stockType={stockType}/>
        </div>
        <div className="col-4">
          <PortfolioContainer purchasedStock={purchasedStock} handleSellStock={handleSellStock} handleBuyStock={handleBuyStock} alphaChecked={alphaChecked} pricedChecked={pricedChecked} stockType={stockType}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
