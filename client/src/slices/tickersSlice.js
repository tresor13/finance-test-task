import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// const initialState = {
//   ids: [],
//   entities: {},
// };
const tickersAdapter = createEntityAdapter();
const initialState = tickersAdapter.getInitialState();
const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setTickers(state, { payload }) {
      payload.forEach((ticker) => {
        const tickerName = ticker.ticker;
        const {
          price,
          exchange,
          change,
          change_percent,
          dividend,
          yeild,
          last_trade_time,
        } = ticker;

        state.ids.push(tickerName);
        const setStatus = () => {
          if (ticker.yeild > state.entities[tickerName].yeild) {
            return "rising";
          } else if (ticker.yeild < state.entities[tickerName].yeild) {
            return "falling";
          } else return "noChange";
        };
        state.entities[tickerName] = {
          status: setStatus(),
          price,
          exchange,
          change,
          change_percent,
          dividend,
          yeild,
          last_trade_time,
        };
        console.log(state);
      });
      return state;
    },
  },
});

export const { actions } = tickersSlice;
export default tickersSlice.reducer;
