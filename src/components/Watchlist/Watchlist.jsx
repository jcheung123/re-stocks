import React from 'react';
import StockContainer from '../StockContainer/StockContainer'
import {AiOutlineBook} from 'react-icons/ai'

function Watchlist(props) {
    return (
        <div>
            <h1 className="mt-4" style={{color: "white"}}>My Stock Portfolio <AiOutlineBook /> </h1>
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