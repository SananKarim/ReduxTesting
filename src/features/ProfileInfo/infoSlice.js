/** @format */
import { createSlice } from "@reduxjs/toolkit";
export const infoSlice = createSlice({
  name: "info",
  initialState: {
    information: [
      {
        name: "Sanan",
        position: "Frontend",
        city: "Gilgit",
      },
      {
        name: "Faiz",
        position: "Backend",
        city: "Gilgit",
      },
    ],
  },
  reducers: {
    changeName: (state, { payload: { index, name, position, city } }) => {
      console.log(index, "nameArrsy");

      state.information[index] = {
        name: name,
        position: position,
        city: city,
      };
    },
  },
});
export const { changeName } = infoSlice.actions;
export default infoSlice.reducer;
