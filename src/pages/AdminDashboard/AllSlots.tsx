import React, { useState } from "react";
import { Button, Modal, Space, Table } from "antd";
import {
  useDeleteRoomMutation,
  useGetAllMeetingRoomsQuery,
  useUpdateMutation,
} from "../../redux/features/room/room.api";

import BNForm from "../../Component/BNForm";

import { toast } from "sonner";
import {
  useDeleteSlotMutation,
  useGetAllAvailableSlotsQuery,
  useUpdateSlotMutation,
} from "../../redux/features/slot/slot.api";
import moment from "moment";

import BNTimePicker from "../../Component/BNTimePicker";
import { TRoom } from "../../Types";
import BNDatePicker2 from "../../Component/BNDatePicker2";
import BNInput from "../../Component/BNInput";
import BNSelect from "../../Component/BNSelect";
import BNNumber from "../../Component/verifyToken/BNNumber";
import { date } from "zod";
import BNTimePickerWatch from "../../Component/BNTimePickerWatch";

const { Column } = Table;
// [
//     { name: "limit", value: 3 },
//     { name: "page", value: value },
//     { name: "sort", value: "id" },
//   ]

const AllSlots: React.FC = () => {
  const [value, setValue] = useState(1);
  const { data, isLoading, isFetching } =
    useGetAllAvailableSlotsQuery(undefined);
  const { data: rooms } = useGetAllMeetingRoomsQuery(undefined, {
    skip: isLoading,
  });
  const [Delete] = useDeleteSlotMutation();

  console.log(data, rooms);
  if (isLoading || !data || !rooms) {
    return <h1>loading...</h1>;
  }
  // const roomNames = rooms?.data?.map((room: TRoom) => {
  //   data?.data?.map((slot) => {
  //     if (slot.room._id === room._id) {
  //       return {
  //         roomId: slot.room._id,
  //         roomNo: room.roomNo,
  //         roomName: room.name,
  //       };
  //     }
  //   });
  // });

  const roomNames = rooms?.data
    ?.filter((room: TRoom) =>
      data?.data?.filter((slot) => slot.room._id === room._id)
    )
    ?.map((room: TRoom) => {
      return {
        roomId: room._id,
        roomNo: room.roomNo,
        roomName: room.name,
      };
    });

  if (!roomNames) {
    return <p>pew</p>;
  }
  const datas = data?.data?.map((item, idx: number) => {
    return {
      _id: item._id,
      key: idx,
      RoomNo: item.room.roomNo,
      RoomName: item.room.name,
      date: moment(new Date(item.date)).format("YYYY-MM-DD"),
      startTime: item.startTime,
      endTime: item.endTime,
      isBooked: item.isBooked,
    };
  });

  const handleDelete = async () => {
    console.log(item._id);
    try {
      const res = await Delete({
        id: item?._id,
      });
      if (res.data) {
        toast.success("Deleted successfully");
      }
      if (res.error) {
        toast.error(res.error?.data?.message);
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <>
      <Table loading={isFetching} pagination={false} dataSource={datas}>
        <Column title="Room Name" dataIndex="RoomName" key="RoomName" />
        <Column title="Room No" dataIndex="RoomNo" key="RoomNo" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Start Time" dataIndex="startTime" key="startTime" />
        <Column title="End Time" dataIndex="endTime" key="endTime" />
        <Column
          title="Booking Status"
          dataIndex="isBooked"
          key="isBooked"
          render={(item) => {
            console.log(item);
            return (
              <h1 className={`${item ? " text-[green]" : " text-blue-500"}`}>
                {item ? "  Booked" : "Pending"}
              </h1>
            );
          }}
        />

        <Column
          title="Action Buttons"
          key="action"
          render={(item) => (
            <Space size="middle">
              <Update item={item} roomNames={roomNames}></Update>
              <h1 onClick={handleDelete}>Delete</h1>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

const Update = ({ item, roomNames }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState("");

  console.log(item);
  const [update] = useUpdateSlotMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log({ item, roomNames });

  const startT = Number(startTime?.split(":")[0]);

  // const rangeArray = Array.from(
  //   { length: 14 - startT },
  //   (_, i) => startT + i + 1
  // );

  const newArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ].filter((val) => ![startT + 1].includes(val));

  const onSubmit = async (udata) => {
    console.log(udata);
    // const updatedSlotData = {
    //   date: moment(udata.date).format("YYYY-MM-DD"),
    //   startTime: moment(udata.startTime, "HH:mm").format("HH:mm"),
    //   endTime: moment(udata.endTime, "HH:mm").format("HH:mm"),
    //   name: udata.roomName,
    //   roomNo: Number(udata.roomNo),
    // };
    // const roomId = udata.roomName.substring(
    //   udata.roomName.length - 24,
    //   udata.roomName.length
    // );
    console.log(udata.date);
    const localDate = moment(udata.date.$d); // Your local date
    const utcDate = localDate.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    console.log(utcDate); // Outputs the UTC date and time

    const updatedSlotData = {
      date: utcDate,
      startTime: udata.startTime,
      endTime: udata.endTime,
      room: {
        name: udata.roomName,
        roomNo: Number(udata.roomNo),
      },
      isBooked: false,
    };

    console.log({ updatedSlotData, udata });

    try {
      const res = await update({ id: item._id, data: updatedSlotData });

      console.log(res);
      if (res.data) {
        toast.success("updated successfully");
        setIsModalOpen(false);
      }
      if (res.error) {
        toast.error(res.error?.data?.message);
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update
      </Button>
      <Modal
        width={"50vw"}
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <BNForm onSubmit={onSubmit}>
          <div className=" grid gap-[2vw] grid-cols-2">
            <BNSelect
              options={roomNames.map((room) => ({
                // value: `${room.roomName} ${room.roomId}`,
                value: `${room.roomName}`,
                label: room.roomName,
              }))}
              name="roomName"
              label="Room Names"
            />
            <BNSelect
              options={roomNames.map((room) => ({
                value: `${room.roomNo}`,
                label: room.roomNo,
              }))}
              name="roomNo"
              label="Room Numbers"
            />
          </div>
          <div className=" grid gap-[2vw] grid-cols-2">
            <BNDatePicker2 layout="" name="date" label="Date" />
            <BNTimePickerWatch
              setStartTime={setStartTime}
              layout=""
              name="startTime"
              label="Start Time"
            />
          </div>
          <div className=" grid gap-[2vw] grid-cols-2">
            <BNTimePicker
              disable={!startTime}
              endArr={newArr}
              layout=""
              name="endTime"
              label="End Time"
            />
          </div>

          <Button
            style={{ marginTop: "2vw" }}
            type="primary"
            htmlType="submit"
            block
          >
            UPDATE
          </Button>
        </BNForm>
      </Modal>
    </>
  );
};

export default AllSlots;
