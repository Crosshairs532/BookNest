import { baseAPi } from "../../api/baseApi";

export const slotAPI = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAvailableSlots: builder.query({
      query: (data) => {
        const param = new URLSearchParams();
        if (data) {
          console.log(data);
          for (const i in data) {
            param.append(i, data[i]);
          }
        }
        console.log(param);
        return {
          url: "/slots/availability",
          method: "GET",
          params: param,
        };
      },
      providesTags: ["slots"],
    }),
    updateSlot: builder.mutation({
      query: (data) => {
        let newData;
        if (data.id) {
          newData = { ...data.data };
        }
        return {
          url: `/slots/${data.id}`,
          method: "PUT",
          body: newData,
        };
      },
      invalidatesTags: ["slots"],
    }),
    deleteSlot: builder.mutation({
      query: (data) => {
        return {
          url: `/slots/${data.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["slots"],
    }),
  }),
});

export const {
  useGetAllAvailableSlotsQuery,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = slotAPI;
