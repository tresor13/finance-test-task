import { createSlice, createEntityAdapter, current } from "@reduxjs/toolkit";
import { uniq } from "lodash";
import { tickersDataAdapter } from "./adapters";
import { getStatus } from "../utils/utils";

const tickersAdapter = createEntityAdapter();
const tickersSlice = createSlice({
  name: "tickers",
  initialState: tickersAdapter.getInitialState({ removedTickers: [] }),

  //I've added a 'Removed Tickers' condition in state to hide tickers that have been removed
  //by the user. This solution is not very good, but the best in the conditions of the problem,
  //because otherwise, I would have to disconnect from the socket, send a request to remove
  //the ticker from the database, and reconnect again.

  reducers: {
    setTickers: (state, { payload }) => {
      const adaptedData = tickersDataAdapter(payload);
      const tickersToHide = state.removedTickers;
      const tickerNames = adaptedData
        .map((item) => item.name)
        .filter((ticker) => !tickersToHide.includes(ticker));
      const newIds = [...state.ids, ...tickerNames];
      const newEntities = adaptedData.reduce((res, item) => {
        const tickerName = item.name;
        const {
          price,
          exchange,
          change,
          change_percent,
          dividend,
          profit,
          last_trade_time,
        } = item;

        const status = getStatus(state.entities[tickerName], item.profit);
        return {
          ...res,
          [tickerName]: {
            ...(state.entities[tickerName] || {}),
            name: tickerName,
            price,
            status,
            exchange,
            change,
            change_percent,
            dividend,
            profit,
            last_trade_time,
          },
        };
      }, state.entities);
      state.ids = uniq(newIds);
      state.entities = newEntities;
      return state;
    },
    removeTicker: (state, { payload }) => {
      const id = payload;
      state.removedTickers = uniq([...state.removedTickers, id]);
      console.log(current(state));
      tickersAdapter.removeOne(state, id);
      return state;
    },
  },
});

export const selectors = tickersAdapter.getSelectors(
  (state) => state.tickersReducer
);
export const { actions } = tickersSlice;
export default tickersSlice.reducer;
