import { useNavigate, useParams } from "react-router-dom";
import BNForm from "../../Component/BNForm";
import BNDatePicker from "../../Component/BNDatePicker";
import BNSelect from "../../Component/BNSelect";
import { Button } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllAvailableSlotsQuery } from "../../redux/features/slot/slot.api";
import moment from "moment";
import BNInput from "../../Component/BNInput";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { bookingData } from "../../Types";
import { useCreateBookingMutation } from "../../redux/features/Booking/booking.api";

import Swal from "sweetalert2";
import { setBooking } from "../../redux/features/Booking/booking.slice";
const BookingForm = () => {
  const [disable, setDisable] = useState("");
  const { roomId } = useParams();
  const cUser = useAppSelector((state) => state.auth.current_user);
  const defaultValue = {
    name: cUser?.name,
    email: cUser?.email,
    phone: cUser?.phone,
    address: cUser?.address,
  };
  const dispatch = useAppDispatch();
  const [booking] = useCreateBookingMutation();
  const navigate = useNavigate();

  // * slots -> roomid, date
  // date.$d

  const dateFormated = moment
    .utc(moment(new Date(disable)).format("YYYY-MM-D") + " 18:00")
    .utc()
    .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  const { data: slots } = useGetAllAvailableSlotsQuery(
    { roomId: roomId, date: dateFormated },
    { skip: !disable }
  );

  console.log({
    disable: !disable,
    slots,
    roomId,
    date: moment(new Date(disable)).format("YYYY-MM-D"),
  });
  // * get logged user details
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookingData: bookingData = {
      date: moment(new Date(data.date)).format("YYYY-MM-D"),
      slots: data.slots,
      room: roomId as string,
      user: cUser,
    };
    Swal.fire({
      title: "Proceed To Payment?",
      text: "Did You check all the booking Information ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setBooking(bookingData));

        console.log({ roomId });
        navigate(`/booking/payment`);
      }
    });

    // const id = toast.loading("Confirming Booking..");
    // try {
    //   console.log(bookingData);
    //   const res = await booking(bookingData);
    //   console.log(res);
    //   if (res.data) {
    //     toast.success("booking Confirmed", {
    //       id,
    //     });
    //   }
    //   if (res?.error?.data?.message) {
    //     toast.error(res?.error?.data?.message, {
    //       id,
    //     });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const slotOptions = slots?.data?.map((slot) => {
    return {
      label: `${slot.startTime} - ${slot.endTime}`,
      value: `${slot}`,
    };
  });

  return (
    <div className=" px-[2.4vw] pt-[25vh] min-h-screen bg-[#0e0e0e] w-full">
      <div>
        <h2 className="text-[8vw] font-semibold relative left-[15vw] font-plainLight mb-8 text-[#faf8fc] ">
          <small className=" text-[3vw] absolute top-0 -left-[5vw] italic font-silkSerifRegular ">
            01
          </small>
          Booking-Form
        </h2>

        <div className="  md-[80%] w-[90%] lg:w-[50%] mx-auto p-6 rounded-lg shadow-lg bg-[white]">
          <BNForm onSubmit={onSubmit} defaultValue={defaultValue}>
            <div className="grid grid-cols-1 gap-4">
              {/* Date and Slots */}
              <div className="grid  grid-cols-2 gap-4">
                <BNDatePicker
                  setDisable={setDisable}
                  name="date"
                  label="Select Date"
                />
                <BNSelect
                  name="slots"
                  label="Select Slot"
                  options={slotOptions}
                />
              </div>

              <div className="grid  grid-cols-2 gap-4">
                <BNInput type="text" name="name" label="Name" />
                <BNInput type="text" name="email" label="Email" />
              </div>
              <div className="grid  grid-cols-2 gap-4">
                <BNInput type="text" name="phone" label="Phone" />
                <BNInput type="text" name="address" label="Address" />
              </div>

              <div className="flex justify-end mt-4">
                <Button
                  type="primary"
                  style={{ width: "100%" }}
                  htmlType="submit"
                >
                  proceed to Payment
                </Button>
              </div>
            </div>
          </BNForm>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
