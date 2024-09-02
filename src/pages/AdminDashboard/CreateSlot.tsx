import { toast } from "sonner";
import { useCreateSlotMutation } from "../../redux/features/slot/slot.api";
import { Button, Form, Typography } from "antd";
import BNForm from "../../Component/BNForm";
import BNDatePicker from "../../Component/BNDatePicker";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllMeetingRoomsQuery } from "../../redux/features/room/room.api";
import BNSelect from "../../Component/BNSelect";
import BNTimePickerWatch from "../../Component/BNTimePickerWatch";
import BNTimePicker from "../../Component/BNTimePicker";
import { useState } from "react";
import moment from "moment";

const { Title } = Typography;
const CreateSlot = () => {
  const [startTime, setStartTime] = useState("");
  const [createSlot] = useCreateSlotMutation();

  const { data: AllRooms } = useGetAllMeetingRoomsQuery(undefined);

  const startT = Number(startTime?.split(":")[0]);

  // const newArr = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //   21, 22, 23, 24,
  // ].filter((val) => ![startT + 1].includes(val));
  const newArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  ];

  const RoomOptions = AllRooms?.data?.map((room) => {
    return {
      value: room._id,
      label: room.name,
    };
  });

  const onSubmit: SubmitHandler<FieldValues> = async (slotData) => {
    const localDate = moment(slotData.date.$d); // Your local date
    const utcDate = localDate.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

    const SlotData = {
      room: slotData.room,
      startTime: slotData.startTime,
      endTime: slotData.endTime,
      date: utcDate,
    };

    console.log(SlotData);
    const id = toast.loading("slot Creating..");
    try {
      const res = await createSlot(slotData);
      if (res.data) {
        toast.success("Slot Created Successfully", { id });
      }
      console.log(res);
      if (res?.error?.data?.errorMessages) {
        toast.error(
          <div>
            <ul>
              {res?.error?.data?.errorMessages.map((error) => (
                <li key={error}>{error.message}</li>
              ))}
            </ul>
          </div>,

          { id }
        );
      }
    } catch (err) {
      toast.error(err.message, { id });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Slot Form
      </Title>
      <BNForm onSubmit={onSubmit}>
        <BNDatePicker
          name="date"
          label="Slot Date"
          setDisable={() => {}}
        ></BNDatePicker>
        <BNSelect
          mode=""
          options={RoomOptions}
          name="room"
          label="Select Room"
        ></BNSelect>
        <BNTimePickerWatch
          setStartTime={setStartTime}
          layout=""
          name="startTime"
          label="Start Time"
        />

        <BNTimePicker
          disable={!startTime}
          endArr={newArr}
          layout=""
          name="endTime"
          label="End Time"
        />
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            CREATE SLOT
          </Button>
        </Form.Item>
      </BNForm>
    </div>
  );
};

export default CreateSlot;
