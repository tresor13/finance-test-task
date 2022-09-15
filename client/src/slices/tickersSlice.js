import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { uniq } from "lodash";
import { tickersDataAdapter } from "./adapters";
import { getStatus } from "../utils/utils";

const tickersAdapter = createEntityAdapter();
const initialState = tickersAdapter.getInitialState();
const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setTickers: (state, { payload }) => {
      const adaptedData = tickersDataAdapter(payload);
      const tickerNames = adaptedData.map((item) => item.name);
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
      return {
        ids: uniq(newIds),
        entities: newEntities,
      };
      // setTickers(state, { adaptedData }) {
      //   adaptedData.forEach((ticker) => {
      //     const tickerName = ticker.ticker;
      //     const {
      //       price,
      //       exchange,
      //       change,
      //       change_percent,
      //       dividend,
      //       yield,
      //       last_trade_time,
      //     } = ticker;

      //     state.ids.push(tickerName);
      //     const setStatus = () => {
      //       const existedTickerYield =
      //         state.entities[tickerName] && state.entities[tickerName].yield;
      //       console.log(existedTickerYield);
      //       if (existedTickerYield && ticker.yield > existedTickerYield)
      //         return "rising";
      //       if (existedTickerYield && ticker.yield < existedTickerYield)
      //         return "falling";
      //       return "noChange";
      //     };
      //     const status = setStatus();
      //     state.entities[tickerName] = {
      //       status,
      //       price,
      //       exchange,
      //       change,
      //       change_percent,
      //       dividend,
      //       yield,
      //       last_trade_time,
      //     };
      //   });
      // },
    },
  },
});

export const { actions } = tickersSlice;
export default tickersSlice.reducer;
