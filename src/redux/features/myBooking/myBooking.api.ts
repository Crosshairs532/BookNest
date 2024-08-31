// /my-bookings

import { baseAPi } from "../../api/baseApi";

export const myBookingApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: () => {
        console.log("riunning");
        return {
          url: "/my-bookings",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetMyBookingsQuery } = myBookingApi;
