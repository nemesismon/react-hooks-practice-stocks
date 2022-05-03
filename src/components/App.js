import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [currentStocks, setCurrentStocks] = useState([])
  const [purchasedStock, setPurchasedStock] = useState([])
  const [alphaChecked, setAlphaChecked] = useState();
  const [priceChecked, setPriceChecked] = useState();

useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then((response) => response.json())
  .then((stocks) => setCurrentStocks(stocks))
}, []);

const handleBuyStock = (stock) => {
  setPurchasedStock([...purchasedStock, stock]);
}

const handleSellStock = (soldStock) => {
  const stockUpdate = purchasedStock.filter((stock) => stock !== soldStock)
  setPurchasedStock(stockUpdate);
}

const handleAlphaSort = () => {
  setAlphaChecked(!alphaChecked)
  setPriceChecked(alphaChecked)
}


const handlePriceSort = () => {
  // setPriceChecked(!priceChecked);
}

// const handleStockType () {

// }

  return (
    <div>
      <Header />
      <MainContainer currentStocks={currentStocks} purchasedStock={purchasedStock} handleBuyStock={handleBuyStock} handleSellStock={handleSellStock} handleAlphaSort={handleAlphaSort} alphaChecked={alphaChecked} handlePriceSort={handlePriceSort} priceChecked={priceChecked}/>
    </div>
  );
}

export default App;
