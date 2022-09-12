import React from "react";
import { useSelector } from "react-redux";
import { uniqueId } from "lodash";

import Ticker from "./Ticker.jsx";

function Tickers() {
  const { tickers } = useSelector((state) => state.tickersReducer);
  return (
    <div className="mt-3">
      {tickers.map((ticker) => (
        <Ticker key={uniqueId("tkr_")} ticker={ticker} />
      ))}
    </div>
  );
}
export default Tickers;
