import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseAPi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://meeting-room-booking-system-for-co-working-spaces.vercel.app/api",
  }),
  endpoints: () => ({}),
});
