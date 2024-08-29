import { useNavigate } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";

import { useCreatePaymentMutation } from "../../redux/features/payment/payment.api";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [createPayment] = useCreatePaymentMutation();

  const handlePaymentMethodChange = (data: any) => {
    setSelectedPaymentMethod(data);
  };

  const handleOrder = async (event: any) => {
    // event.preventDefault();

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

            <form onSubmit={handleOrder} className="mt-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Shipping Info
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  />
                  <input
                    name="street"
                    type="text"
                    required
                    placeholder="Street address"
                    className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  />
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    required
                    className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  />
                  <input
                    name="state"
                    type="text"
                    required
                    placeholder="State"
                    className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  />
                  <input
                    name="postal"
                    type="number"
                    placeholder="Postal code"
                    required
                    className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

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
                      <h1 className=" text-xl font-semibold">
                        Cash on delivery
                      </h1>
                    </label>
                  </div>
                </div>

                <div className="">
                  {selectedPaymentMethod === "card" && (
                    <>
                      <div className="mt-8">
                        <input
                          required
                          type="text"
                          placeholder="Cardholder's Name"
                          className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 w-full"
                        />
                      </div>
                      <div className="flex items-center mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 ml-3"
                          viewBox="0 0 291.764 291.764"
                        >
                          <path
                            fill="#2394bc"
                            d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                            data-original="#2394bc"
                          />
                          <path
                            fill="#efc75e"
                            d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                            data-original="#efc75e"
                          />
                        </svg>
                        <input
                          required
                          type="number"
                          placeholder="Card Number"
                          className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 w-full"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <input
                          type="text"
                          required
                          placeholder="EXP."
                          className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                        />
                        <input
                          type="text"
                          required
                          placeholder="CVV"
                          className="px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => navigate("/all-products")}
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
            </form>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Summary</h2>

            <div className="mt-8 divide-y bg-[#f0f0f0]">
              {/* <div>
                {cartProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex border-b-2 flex-col py-2 bg-white"
                  >
                    <div className="flex justify-between gap-2 items-center">
                      <span className=" text-gray-700">{index + 1}.</span>
                      <h2 className="text-lg leading-none font-clicky font-medium text-gray-700">
                        {product.title}
                      </h2>
                      <h2 className="text-lg font-clicky font-bold text-gray-700">
                        ${product.price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="p-4 mt-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Total:</span>
                  <span className="font-semibold text-gray-700"></span>
                </div>
              </div>
            </div>
            {selectedPaymentMethod == "card" && (
              <button
                onClick={handleOrder}
                className="px-6 py-3 mt-4 w-full bg-gray-800 text-white font-medium tracking-wide rounded-md hover:bg-gray-700"
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
