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

  console.log(rooms?.data);
  if (isLoading || !data || !rooms) {
    return <h1>loading...</h1>;
  }

  const roomNames = rooms?.data?.map((room: TRoom) => {
    return {
      roomId: room._id,
      roomNo: room.roomNo,
    };
  });
  const roomNumbers = rooms?.data?.map((room: TRoom) => {
    return {
      roomId: room._id,
      roomName: room.name,
    };
  });
  console.log(data.data);
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
          render={(item) => (
            <h1
              className={`${
                item.isBooked ? " text-[green]" : " text-blue-500"
              }`}
            >
              {item.isBooked ? "  Booked" : "Pending"}
            </h1>
          )}
        />

        <Column
          title="Action Buttons"
          key="action"
          render={(item) => (
            <Space size="middle">
              <Update
                item={item}
                roomNames={roomNames}
                roomNumbers={roomNumbers}
              ></Update>
              <h1
                onClick={async () => {
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
                }}
              >
                Delete
              </h1>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

const Update = ({ item, roomNames, roomNumbers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update] = useUpdateSlotMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const newItem1 = {
    roomNo: item?.RoomN0,
    name: item?.RoomName,
    date: item.date,
  };

  const onSubmit = async (udata) => {
    // data: new Date(udata.date).toISOString(),

    const slotData = {
      startTime: moment(new Date(udata.startTime).toISOString()).format(
        "HH:mm"
      ),
      endTime: moment(new Date(udata.endTime).toISOString()).format("HH:mm"),
    };
    console.log(slotData);
    try {
      const res = await update({ id: item._id, data: slotData });
      if (res.data) {
        toast.success("updated successfully");
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
        <BNForm defaultValue={newItem1} onSubmit={onSubmit}>
          <div className=" grid gap-[2vw] grid-cols-2">
            {/* <BNInput
              layout="vertical"
              type="text"
              label="Room Name"
              name="name"
            /> */}
            {/* <BNSelect
              mode="multiple"
              options={roomNames}
              name="roomName"
              label="Room Names"
            /> */}
            {/* <BNSelect
              mode="multiple"
              options={roomNames}
              name="roomName"
              label="Room Names"
            /> */}

            {/* <BNNumber
              layout="vertical"
              type="number"
              name="roomNo"
              label="Room No."
            /> */}
          </div>
          <div className=" grid gap-[2vw] grid-cols-2">
            {/* <BNDatePicker2 layout="vertical" name="date" label="Date" /> */}
            <BNTimePicker
              layout="vertical"
              name="startTime"
              label="Start Time"
            />
            <BNTimePicker layout="vertical" name="endTime" label="End Time" />
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
