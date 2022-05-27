import React, { useState, useEffect } from 'react';
import './StockContainer.css'

require('dotenv').config()
const key = process.env.REACT_APP_API_KEY;


function StockContainer(props) {

  const [stockProfile, setStockProfile] = useState({
    c: '',
    logo: '',
    ticker: '',
    name: '',
    exchange: '',
    marketCapitalization: '',
    finnhubIndustry: '',
  });


  useEffect(() => {

    const urls = [
      `https://finnhub.io/api/v1/stock/profile2?` + `symbol=${props.ticker}&token=${key}`,
      `https://finnhub.io/api/v1/quote?` + `symbol=${props.ticker}&token=${key}`
    ];

    let stockData = {}
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((response) => {
            return response.json()
          })
          .then((responseData) => {
            stockData = {...stockData, ...responseData}
            return stockProfile
          })
          .catch((error) => console.log("There was a problem!", error))
      ),
      []
    ).then(() => {
       setStockProfile(stockData)
    });
  }, [props.ticker]);

  const addThisStock = (stockProfile) => {
    const newWatchlist = [...props.watchlist]
    if (!props.watchlist.includes(stockProfile.ticker)) {
      newWatchlist.push(stockProfile.ticker)
    }
    props.setWatchlist(newWatchlist)
    // postRequestFunction('/portfolio')
  }


  // invalid tickers
  if (!stockProfile.ticker) {
    return (
    <div className="card-columns"> 
      <div className="card bg-light">
        <div className="card-body text-center">
            <h4>  
              Ticker not found.
            </h4> 
        </div>
      </div>
  </div>
  )} else

  return (
    <div className="col-sm-6 col-md-4">
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">
              <h2>  
                <img className="logo__img" src={stockProfile.logo} alt="logo" /> 
                  {stockProfile.ticker}
              </h2> 
              <h3>{stockProfile.c}</h3>
              <h4>{stockProfile.name}</h4>
              <p>{stockProfile.exchange}</p>
              <p>Market Cap: {stockProfile.marketCapitalization} </p>
              <p>{stockProfile.finnhubIndustry}</p>
                <button 
                  onClick={() => addThisStock(stockProfile)}
                  name="addStock"
                  type="button" class="btn btn-primary">Add to WatchList
                </button>
            </p>
          </div>
        </div>
    </div>
  );
}

export default StockContainer