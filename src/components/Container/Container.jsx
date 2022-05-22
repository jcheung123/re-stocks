import React, {useState} from 'react';
import Heading from '../Heading/Heading'
import Stats from '../Stats/Stats'
import StockContainer from '../StockContainer/StockContainer'
import AddStock from '../AddStock/AddStock'
import './Container.css'


function Container(props) {

    const [ticker, setTicker] = useState('AAPL');

    return (
        <div className="container-fluid">
            <Heading />
            <Stats />
            <AddStock setTicker={setTicker} ticker={ticker}/>
            <StockContainer ticker={ticker}/>
        </div>
    );
  }

export default Container