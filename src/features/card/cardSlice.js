/** @format */

import { createSlice } from "@reduxjs/toolkit";
import image from "../../assets/images/faiz.jpg";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
      { image, likes: 0 },
      { image, likes: 1 },
    ],
  },
  reducers: {
    increment: (state, { payload: { index, likes } }) => {
      state.cards[index] = {
        ...state.cards[index],
        likes,
      };
    },
  },
});

export const { increment } = cardSlice.actions;
export default cardSlice.reducer;
