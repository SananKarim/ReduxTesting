/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cardReducer from "../features/card/cardSlice";
import infoReducer from "../features/ProfileInfo/infoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer,
    info: infoReducer,
  },
});
