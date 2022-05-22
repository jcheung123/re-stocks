import React, { useState, useEffect } from 'react';
import './StockContainer.css'


function StockContainer(props) {

  const [stockProfile, setStockProfile] = useState({
    logo: '',
    ticker: '',
    name: '',
    exchange: '',
    marketCapitalization: '',
    finnhubIndustry: '',
  });

  useEffect(() => {

    const url = `https://finnhub.io/api/v1/stock/profile2?`+`symbol=${props.ticker}&token=ca4l2laad3ibhjmjo6bg`;

    const requestCompanyProfile = {
      method: "GET"
    }

    fetch(url, requestCompanyProfile)
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      setStockProfile(responseData)
      return stockProfile
    })

  },[props.ticker])

  return (
      <div className="card-columns"> 
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">
              <h2>  
                <img className="logo__img" src={stockProfile.logo} alt="logo" /> 
                  {stockProfile.ticker}
              </h2> 
              <h4>{stockProfile.name}</h4>
              <p>{stockProfile.exchange}</p>
              <p>Market Cap: {stockProfile.marketCapitalization} </p>
              <p>{stockProfile.finnhubIndustry}</p>
            </p>
          </div>
        </div>
      </div>
  );

}

export default StockContainer
