/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Button, Typography } from "antd";
import BNInput from "../../Component/BNInput";
import BNForm from "../../Component/BNForm";
import BNSelect from "../../Component/BNSelect";
import BNNumber from "../../Component/verifyToken/BNNumber";
import { useCreateRoomMutation } from "../../redux/features/room/room.api";
import { toast } from "sonner";
import { er, er2 } from "./AllBooking";
const { Title } = Typography;
// const { Option } = Select;

const CreateRoom = () => {
  const [createRoom] = useCreateRoomMutation();
  const onSubmit = async ({ img1, img2, ...values }: any) => {
    const roomData = {
      ...values,
      images: [img1, img2],
    };

    console.log(roomData);

    const id = toast.loading("Room Creating..");
    try {
      const res = await createRoom(roomData);
      if (res.data) {
        toast.success("Room Created Successfully", { id });
      }
      console.log(res);
      if ((res?.error as er2)?.data.message) {
        toast.error((res?.error as er2)?.data.message, { id });
      }
    } catch (err) {
      toast.error((err as er)?.message, { id });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Room Details Form
      </Title>
      <BNForm onSubmit={onSubmit}>
        <BNInput type="text" label="Room Name" name="name" />
        <BNNumber label="Price Per Slot" name="pricePerSlot" type="number" />
        <BNNumber label="Room Capacity" name="capacity" type="number" />
        <BNNumber type="number" name="roomNo" label="Room Number" />
        <BNNumber label="Floor Number" name="floorNo" type="number" />
        <BNSelect
          options={[
            {
              value: "whiteboard",
              label: "whiteboard",
            },
            {
              value: "projector",
              label: "projector",
            },
            {
              value: "ac",
              label: "ac",
            },
            {
              value: "wifi",
              label: "wifi",
            },

            {
              label: "Add More",
              disabled: true,
            },
          ]}
          label="Amenities"
          name="amenities"
          mode="tags"
        />
        <BNInput type="text" label="Image-1" name="img1" />
        <BNInput type="text" label="Image-2" name="img2" />
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </BNForm>
    </div>
  );
};

export default CreateRoom;
