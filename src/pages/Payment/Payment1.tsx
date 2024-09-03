/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment1 = ({ totalAmount }: any) => {
  const stripePromise = loadStripe(import.meta.env.VITE_clientSecret as string);

  return (
    <div className="">
      <Elements stripe={stripePromise}>
        <CheckoutForm totalAmount={totalAmount}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment1;
