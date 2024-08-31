import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCreatePaymentMutation } from "../../redux/features/payment/payment.api";
import { loginState } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [createPayment] = useCreatePaymentMutation(undefined);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const price = { price: 100 };
  const user = useAppSelector(loginState);
  console.log(user.current_user.name, "user");
  console.log(clientSecret);
  useEffect(() => {
    console.log("clikced");
    const fetchPayment = async () => {
      try {
        const res = await createPayment(price);
        console.log("Payment response:", res.data.data.clientSecret);
        setClientSecret(res.data.data.clientSecret);
      } catch (error) {
        console.error("Error creating payment:", error);
      }
    };

    fetchPayment();
  }, []);
  console.log(clientSecret);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     console.log("clicked");
  //     if (!stripe || !elements) {
  //       return;
  //     }
  //     const card = elements.getElement(CardElement);

  //     if (card === null) {
  //       return;
  //     }
  //     const { error, paymentMethod } = await stripe.createPaymentMethod({
  //       type: "card",
  //       card,
  //     });

  //     if (error) {
  //       console.log("payment error", error);
  //       setError(error?.message as string);
  //     } else {
  //       console.log("payment method", paymentMethod);
  //       setError("");
  //     }

  //     const { paymentIntent, error: confirmError } =
  //       await stripe.confirmCardPayment(clientSecret, {
  //         payment_method: {
  //           card: card,
  //           billing_details: {
  //             name: user?.current_user.name || "anonymous",
  //           },
  //         },
  //       });
  //     if (confirmError) {
  //       console.log("confirm error");
  //     } else {
  //       console.log("payment intent", paymentIntent);
  //       if (paymentIntent.status === "succeeded") {
  //         console.log("transaction id", paymentIntent.id);
  //         setTransactionId(paymentIntent.id);
  //       }
  //     }
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Ensure stripe and elements are loaded
    if (!stripe || !elements) {
      return;
    }

    // Get the card element
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Create the payment method
    const { error: paymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentMethodError) {
      console.log("Payment Method Error:", paymentMethodError);
      setError(paymentMethodError.message as string);
      return;
    } else {
      setError("");
    }

    // Confirm the card payment with the client secret
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.current_user.name || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirmation Error:", confirmError);
      toast.error(<div className="w-full h-full ">{confirmError.message}</div>);
      setError(confirmError.message as string);
    } else if (paymentIntent?.status === "succeeded") {
      console.log("Payment Intent:", paymentIntent);
      toast.success(
        <div className=" flex flex-col w-full h-full">{paymentIntent.id}</div>
      );
      setTransactionId(paymentIntent.id);
      //   toast.success(`${paymentIntent.id}`);
      setError("");
    }
  };

  return (
    <>
      <form
        className=" w-full  border-2 h-[40vh]   bg-[#0e0e0e] flex flex-col justify-between "
        onSubmit={handleSubmit}
      >
        <CardElement
          className=" mt-[2vw]"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fafefc",
                "::placeholder": {
                  color: "#FFFFFF",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className=" text-[#faf8fc] text-[1.4vw] w-max mx-auto cursor-pointer border-2 "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          PROCEED TO PAYMENT
        </button>
      </form>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
