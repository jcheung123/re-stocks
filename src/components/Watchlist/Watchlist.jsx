import React from 'react';
import StockContainer from '../StockContainer/StockContainer'


function Watchlist(props) {
    return (
        <div>
            <h1 className="mt-4">Portfoliio</h1>
                {/* <StockContainer ticker={props.watchlist[0]} /> */}
                {props.watchlist.map((watchlistMapped, idx) => {
                    return <StockContainer key={idx} ticker={watchlistMapped}/>
                })}
        </div>
    );
  }

export default Watchlist