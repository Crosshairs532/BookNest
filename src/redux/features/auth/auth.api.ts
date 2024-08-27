import { Application } from "express";
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
    register: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/signup",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
