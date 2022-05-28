import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './StockContainer.css'

require('dotenv').config()
const key = process.env.REACT_APP_API_KEY;


function StockContainer(props) {

  const location = useLocation();

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
    alert('stock added to watchlist')
    // postRequestFunction('/portfolio')
  }

  const removeThisStock = (stockProfile) => {
    const newWatchlist = [...props.watchlist]
    if (newWatchlist.length > 0) {
      newWatchlist.splice(stockProfile, 1)
    }
    props.setWatchlist(newWatchlist)
    alert('stock removed from watchlist')
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

              {location.pathname === "/"  ?
                <div>
                  <button 
                    onClick={() => addThisStock(stockProfile)} 
                    name="addStock"
                    type="button" class="btn btn-primary">Add to WatchList
                  </button>  &nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <button 
                    onClick={() => removeThisStock(stockProfile)}
                    name="removeStock"
                    type="button" class="btn btn-primary">Remove
                  </button>
                </div>
                : ''
                }
            </p>
          </div>
        </div>
    </div>
  );
}

export default StockContainer