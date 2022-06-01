import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs';


function AddStock(props) {
    const [tickerInput, setTickerInput] = useState(props.ticker);

    const handleInputChange = (e) => {
        setTickerInput(e.target.value)
    }

    const searchCallBack = (e) => {
        e.preventDefault()
        props.setTicker(tickerInput)
    }

    return (
        <div>
            <h6 style={{color: "white"}}>Search Stock</h6>
            <form action="/" method="post">
                <div className="input-group rounded">
                    <input type="text" 
                    value={tickerInput}
                    className="form-control-lg rounded" placeholder="Add Stock" aria-label="Search" aria-describedby="search-addon"
                    onChange={handleInputChange}
                    >
                    </input>
                    <button onClick={searchCallBack}  type="button" className="btn btn-outline-primary btn-lg">
                        <BsSearch />
                    </button>
                </div>
            </form>
        </div> 
    );
}

export default AddStock