import { useNavigate, useParams } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";

import { useCreatePaymentMutation } from "../../redux/features/payment/payment.api";
import Payment1 from "./payment1";
import { useAppSelector } from "../../redux/hook";
import { getBookingData } from "../../redux/features/Booking/booking.slice";
import { useGetAmountMutation } from "../../redux/features/Booking/booking.api";
import { useGetSingleRoomQuery } from "../../redux/features/room/room.api";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [createPayment] = useCreatePaymentMutation();
  const bookingData = useAppSelector(getBookingData);

  console.log({ id, bookingData });

  // const amountData = useGetAmountMutation({id, });

  // const singleRoom = useGetSingleRoomQuery(id);

  // console.log({ singleRoom });

  // const amount  = bookingData?.slots?.length * singleRoom.data.pricePerslot
  const handlePaymentMethodChange = (data: any) => {
    setSelectedPaymentMethod(data);
  };

  const handleOrder = async (event: any) => {
    event.preventDefault();
    const res = await createPayment({ amount: 1000, name: "me" });
    console.log(res);
  };

  return (
    <div className="font-sans bg-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="text-center lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            {/* <form onSubmit={handleOrder} className="mt-8"> */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800">
                Payment Method
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="card"
                    className="w-5 h-5 cursor-pointer"
                    checked={selectedPaymentMethod === "card"}
                    onChange={() => handlePaymentMethodChange("card")}
                  />

                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                    />
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash on delivery"
                    checked={selectedPaymentMethod === "cash on delivery"}
                    onChange={() =>
                      handlePaymentMethodChange("cash on delivery")
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                  <label
                    htmlFor="cash on delivery"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <MdDeliveryDining size={30}></MdDeliveryDining>
                    <h1 className=" text-xl font-semibold">Cash on delivery</h1>
                  </label>
                </div>
              </div>

              <div className="">
                {selectedPaymentMethod === "card" && (
                  <div className=" ]">
                    <Payment1></Payment1>
                  </div>
                )}
              </div>

              <div
                className={` ${
                  selectedPaymentMethod === "card" ? "hidden" : "block"
                } mt-8 grid grid-cols-2 gap-4`}
              >
                <button
                  onClick={() => navigate("/")}
                  className="order-2 px-6 py-3 border border-gray-300 font-medium tracking-wide text-gray-600 rounded-md hover:bg-gray-200"
                >
                  Back to Shop
                </button>
                <button
                  type="submit"
                  className="order-1 px-6 py-3 bg-gray-800 text-white font-medium tracking-wide rounded-md hover:bg-gray-700"
                >
                  Place Order
                </button>
              </div>
            </div>
            {/* </form> */}
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Summary</h2>

            <div className="mt-8 divide-y bg-[#f0f0f0]">
              <div className="p-4 mt-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Total:</span>
                  <span className="font-semibold text-gray-700"></span>
                </div>
              </div>
            </div>
            {/* {selectedPaymentMethod == "card" && (
              <button
                onClick={handleOrder}
                className={` ${
                  selectedPaymentMethod == "card" ? "hidden" : "block"
                } px-6 py-3 mt-4 w-full bg-gray-800 text-white font-medium tracking-wide rounded-md hover:bg-gray-700}`}
              >
                Proceed to Payment
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
