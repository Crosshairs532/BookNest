import { createSlice } from "@reduxjs/toolkit";

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
      console.log({ ...state });
      //  state.name = payload?.name:""
      //  state.maxPrice = payload?.maxPrice:10000
      //  state.minPrice = payload?.minPrice:0
      //  state.capacity = payload?.capacity:0
      //  state.sort = payload?.sort:1;

      return {
        ...state,
        name: payload?.name !== undefined ? payload.name : state.name,
        maxPrice: !isNaN(payload?.maxPrice) ? payload.maxPrice : state.maxPrice,
        minPrice: !isNaN(payload?.minPrice) ? payload.minPrice : state.minPrice,
        capacity: !isNaN(payload?.capacity) ? payload.capacity : state.capacity,
        sort: payload?.sort !== undefined ? payload.sort : state.sort,
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
export const roomSelector = (state: any) => state.room;
export default roomSlice.reducer;
