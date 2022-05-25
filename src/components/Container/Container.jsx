import React, {useState} from 'react';
import Heading from '../Heading/Heading'
import StockContainer from '../StockContainer/StockContainer'
import AddStock from '../AddStock/AddStock'
import './Container.css'


function Container(props) {

    const [ticker, setTicker] = useState('AAPL');

    return (
        <div className="container-fluid">
            <Heading />
            <AddStock setTicker={setTicker} ticker={ticker}/>
            <br /><br />
            <StockContainer ticker={ticker} {...props} />
            {/* <StockContainer ticker={ticker} setWatchlist={props.setWatchlist} watchlist={props.watchlist}/> */}
        </div>
    );
  }

export default Container