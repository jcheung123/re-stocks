import React, {useState} from 'react';


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
            <form action="/" method="post">
                <div className="input-group rounded">
                    <input type="text" 
                    value={tickerInput}
                    className="form-control rounded" placeholder="Add Stock" aria-label="Search" aria-describedby="search-addon"
                    onChange={handleInputChange}
                    >
                    </input>
                    <input onClick={searchCallBack} type="submit" value="Submit"></input>
                </div>
            </form>

        </div> 
    );
}

export default AddStock