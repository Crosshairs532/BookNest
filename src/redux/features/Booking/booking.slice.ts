import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {};

const initialValue = {
  booking: {},
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState: initialValue,
  reducers: {
    setBooking: (state, { payload }) => {
      state.booking = { ...state.booking, ...payload };
    },
  },
});
export const getBookingData = (state) => state.booking;
export const { setBooking } = bookingSlice.actions;
// export const roomSelector = (state) => state.room;
export default bookingSlice.reducer;
