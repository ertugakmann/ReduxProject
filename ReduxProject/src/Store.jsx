import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./control/cardSlice.jsx";

export const Store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default Store;
