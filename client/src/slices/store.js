import { configureStore } from "@reduxjs/toolkit";
import tickersReducer from './tickersSlice.js'

export default configureStore({
  reducer: {
    tickersReducer,
  },
});
