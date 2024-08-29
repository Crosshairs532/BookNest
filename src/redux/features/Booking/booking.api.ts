import { baseAPi } from "../../api/baseApi";

export const bookingApI = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllAvailableSlots: builder.query({
    //   query: (data) => {
    //     const param = new URLSearchParams();
    //     if (data) {
    //       console.log(data);
    //       for (const i in data) {
    //         param.append(i, data[i]);
    //       }
    //     }
    //     console.log(param);
    //     return {
    //       url: "/slots/availability",
    //       method: "GET",
    //       params: param,
    //     };
    //   },
    //   providesTags: ["slots"],
    // }),
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    createPayment: builder.mutation({
      query: (data) => {
        return {
          url: "/create-payment",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApI;
