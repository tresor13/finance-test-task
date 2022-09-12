import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickers: [],
};

const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setTickers(state, { payload }) {
      state.tickers = payload;
    },
  },
});

export const { actions } = tickersSlice;
export default tickersSlice.reducer;
