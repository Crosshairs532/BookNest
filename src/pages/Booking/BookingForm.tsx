/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useAppSelector } from "../../redux/hook";
import { bookingData, Slot, TCuser } from "../../Types";
import { useCreateBookingMutation } from "../../redux/features/Booking/booking.api";
import Swal from "sweetalert2";
import { RootState } from "../../redux/store";

const BookingForm = () => {
  const [disable, setDisable] = useState("");
  const { roomId } = useParams();
  const cUser = useAppSelector(
    (state: RootState) => state.auth.current_user
  ) as TCuser | null;
  console.log(cUser);
  const defaultValue: TCuser = {
    name: cUser?.name || "",
    email: cUser?.email || "",
    phone: cUser?.phone || "",
    address: cUser?.address || "",
  };

  const [createBooking] = useCreateBookingMutation();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // * slots -> roomid, date
  // date.$d

  // const dateFormated = moment
  //   .utc(moment(new Date(disable)).format("YYYY-MM-D") + " 18:00")
  //   .utc()
  //   .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  console.log(cUser);
  const dateFormated = moment
    .utc(
      moment
        .utc(moment(new Date(disable)).format("YYYY-MM-D") + " 00:00") // Set time to 00:00
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
    )
    .subtract(6, "hours")
    .format("YYYY-MM-DDTHH:mm:ss.SSS[+00:00]");
  const { data: slots } = useGetAllAvailableSlotsQuery(
    { roomId: roomId, date: dateFormated },
    { skip: !disable }
  );

  console.log({ dateFormated, roomId });

  // console.log({
  //   disable: !disable,
  //   slots,
  //   roomId,
  //   date: moment(new Date(disable)).format("YYYY-MM-D"),
  // });
  // * get logged user details
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const slots = data?.slots
      .map((slot: string) => JSON.parse(slot))
      .map((sl: any) => sl._id);

    const bookingData: bookingData = {
      date: dateFormated,
      slots: slots,
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        await createBooking(bookingData);
        console.log({ roomId });
        navigate(`/booking-payment/${roomId}`);
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
  type TslotOption = {
    label: string;
    value: string;
  };

  const slotOptions: TslotOption[] = slots?.data?.map((slot: Slot) => {
    return {
      label: `${slot.startTime} - ${slot.endTime}`,
      value: JSON.stringify(slot),
    };
  });
  console.log({ slots, slotOptions });

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
                  mode="multiple"
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
