import React from 'react';
import Stats from '../.././components/Stats/Stats';
import WatchList from '../.././components/Watchlist/Watchlist';

const Portfolio = (props) => {

  return (
    <div>
        <Stats />
        <WatchList {...props} />
    </div>
  );

};

export default Portfolio;