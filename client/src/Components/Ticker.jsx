import React from "react";
// import { useSelector } from 'react-redux';

function Ticker({ ticker }) {
  return (
    <div className="card">
      <div className="card-header">{`${ticker.ticker} - ${ticker.price}`}</div>
    </div>
  );
}

export default Ticker;
