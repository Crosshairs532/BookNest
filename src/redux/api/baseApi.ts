import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const customBaseQuery = fetchBaseQuery({
  baseUrl:
    // "https://meeting-room-booking-system-for-co-working-spaces.vercel.app/api",
    "http://localhost:2000/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseAPi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQuery,
  tagTypes: ["user", "room", "slots", "booking"],
  endpoints: () => ({}),
});
