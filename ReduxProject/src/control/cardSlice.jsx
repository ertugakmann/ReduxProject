import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  quantity: 0,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
});

console.log(cardSlice);

export default cardSlice.reducer;
