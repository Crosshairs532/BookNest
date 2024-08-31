import { baseAPi } from "../../api/baseApi";

export const bookingApI = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
    UpdateBooking: builder.mutation({
      query: (booking) => {
        const { id, isConfirmed } = booking;
        console.log(id, { isConfirmed });
        return {
          url: `/bookings/${id}`,
          method: "PUT",
          body: { isConfirmed },
        };
      },
      invalidatesTags: ["booking"],
    }),
    deleteBooking: builder.mutation({
      query: (booking) => {
        const { id, data } = booking;
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
          body: data,
        };
      },
      invalidatesTags: ["booking"],
    }),
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingQuery,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
} = bookingApI;
