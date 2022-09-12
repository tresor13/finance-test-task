import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Tickers from "./Components/TickersBoard";
import { actions as tickerActions } from "./slices/tickersSlice.js";
const socket = io.connect("http://localhost:4000");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = socket.on("connect", () => {
      socket.emit("start");
      socket.on("ticker", (quotes) => {
        dispatch(tickerActions.setTickers(quotes));
      });
    });
  }, [socket]);

  return (
    <div className="App">
      <Tickers />
    </div>
  );
}

export default App;
