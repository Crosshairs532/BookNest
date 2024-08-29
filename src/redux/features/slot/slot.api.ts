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
    // getSingleRoom: builder.query({
    //   query: (id) => {
    //     console.log(id);
    //     return {
    //       url: `/rooms/${id}`,
    //       method: "GET",
    //     };
    //   },
    // }),
  }),
});

export const { useGetAllAvailableSlotsQuery } = slotAPI;
