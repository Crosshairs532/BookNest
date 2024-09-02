import { baseAPi } from "../../api/baseApi";

export const authApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMeetingRooms: builder.query({
      query: (data) => {
        return {
          url: `/rooms`,
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
      providesTags: ["room"],
    }),
    createRoom: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/rooms",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["room"],
    }),
    update: builder.mutation({
      query: (data) => {
        let newData;
        if (data.id) {
          newData = { ...data.data };
        }
        return {
          url: `/rooms/${data.id}`,
          method: "PUT",
          body: newData,
        };
      },
      invalidatesTags: ["room"],
    }),
    deleteRoom: builder.mutation({
      query: (data) => {
        let newData;
        if (data.id) {
          newData = { ...data.data };
          console.log(newData);
        }
        return {
          url: `/rooms/${data.id}`,
          method: "DELETE",
          body: newData,
        };
      },
      invalidatesTags: ["room"],
    }),
  }),
});

export const {
  useGetAllMeetingRoomsQuery,
  useCreateRoomMutation,
  useGetSingleRoomQuery,
  useUpdateMutation,
  useDeleteRoomMutation,
} = authApi;
