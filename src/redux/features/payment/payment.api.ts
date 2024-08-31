import { baseAPi } from "../../api/baseApi";

export const paymentAPI = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/payment/create-payment-intent",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentAPI;
