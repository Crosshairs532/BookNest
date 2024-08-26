import { baseAPi } from "../../api/baseApi";

export const authApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
