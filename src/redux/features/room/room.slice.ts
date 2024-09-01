import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {};

const initialValue = {
  name: "",
  maxPrice: 10000,
  minPrice: 0,
  capacity: 0,
  sort: 1,
};

export const roomSlice = createSlice({
  name: "room",
  initialState: initialValue,
  reducers: {
    setFilter: (state, { payload }) => {
      console.log({ ...state, ...payload });
      //  state.name = payload?.name:""
      //  state.maxPrice = payload?.maxPrice:10000
      //  state.minPrice = payload?.minPrice:0
      //  state.capacity = payload?.capacity:0
      //  state.sort = payload?.sort:1;

      return {
        ...state,
        ...payload,
      };
    },
    reset: (state) => {
      state.name = initialValue.name;
      state.maxPrice = initialValue.maxPrice;
      state.minPrice = initialValue.minPrice;
      state.capacity = initialValue.capacity;
    },
  },
});

export const { setFilter, reset } = roomSlice.actions;
export const roomSelector = (state) => state.room;
export default roomSlice.reducer;
