import { baseAPi } from "../../api/baseApi";

export const authApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMeetingRooms: builder.query({
      query: (data) => {
        // const param = new URLSearchParams();
        // if (data) {
        //   console.log(data);
        //   param.append("filterData", data);
        //   console.log(param);
        // }

        return {
          url: "/rooms",
          method: "GET",
          params: data,
        };
      },
      providesTags: ["room"],
    }),
    getSingleRoom: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/rooms/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllMeetingRoomsQuery, useGetSingleRoomQuery } = authApi;
