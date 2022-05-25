import React from 'react';
import WatchList from '../.././components/Watchlist/Watchlist';

const Portfolio = (props) => {

  return (
    <div>
        <h1 className="mt-4">Username's Stock Portfolio</h1>
        <WatchList {...props} />
    </div>
  );

};

export default Portfolio;