import React from 'react';
import StockContainer from '../StockContainer/StockContainer'


function Watchlist(props) {
    return (
        <div>
            <h1 className="mt-4">My Stock Portfolio</h1>
            <br /><br />
            <div className="row">
                    {/* <StockContainer ticker={props.watchlist[0]} /> */}
                    {props.watchlist.map((watchlistMapped, idx) => {
                        return <StockContainer key={idx} ticker={watchlistMapped}/>
                    })}                  
            </div>
        </div>
    );
  }

export default Watchlist