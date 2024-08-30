import React, { useState } from "react";
import { Button, Modal, Space, Table } from "antd";
import {
  useDeleteRoomMutation,
  useGetAllMeetingRoomsQuery,
  useUpdateMutation,
} from "../../redux/features/room/room.api";
import BNInput from "../../Component/BNInput";

import BNForm from "../../Component/BNForm";
import BNNumber from "../../Component/verifyToken/BNNumber";
import BNSelect from "../../Component/BNSelect";
import { toast } from "sonner";
import { useGetAllAvailableSlotsQuery } from "../../redux/features/slot/slot.api";
import moment from "moment";
import BNDatePicker from "../../Component/BNDatePicker";
import BNTimePicker from "../../Component/BNTimePicker";

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
  const [Delete] = useDeleteRoomMutation();
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  const datas = data?.data?.map((item, idx) => ({
    _id: item._id,
    key: idx,
    RoomNo: item.room.roomNo,
    RoomName: item.room.name,
    date: moment(new Date(item.date)).format("YYYY-MM-DD"),
    startTime: item.startTime,
    endTime: item.endTime,
  }));
  console.log(data.data);
  return (
    <>
      <Table loading={isFetching} pagination={false} dataSource={datas}>
        <Column title="Room Name" dataIndex="RoomName" key="RoomName" />
        <Column title="Room No" dataIndex="RoomNo" key="RoomNo" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Start Time" dataIndex="startTime" key="startTime" />
        <Column title="End Time" dataIndex="endTime" key="endTime" />

        <Column
          title="Action Buttons"
          key="action"
          render={(item) => (
            <Space size="middle">
              <Update item={item}></Update>
              <h1
                onClick={async () => {
                  console.log(item._id);
                  try {
                    const res = await Delete({
                      id: item?._id,
                      isDeleted: true,
                    });
                    console.log(res);
                  } catch (err) {
                    toast.error(err?.message);
                  }
                }}
                className=""
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

const Update = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update] = useUpdateMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const newItem1 = {
    roomNo: item?.RoomN0,
    name: item?.RoomName,
  };

  const optionsData = [];
  const onSubmit = (udata) => {
    update({ id: item._id, data: udata });
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
            <BNInput
              layout="vertical"
              type="text"
              label="Room Name"
              name="name"
            />
            <BNNumber
              layout="vertical"
              type="number"
              name="roomNo"
              label="Room No."
            />
          </div>
          <div className=" grid gap-[2vw] grid-cols-2">
            <BNDatePicker
              layout="vertical"
              name="date"
              label="Date"
              setDisable={() => {}}
            />
            <BNTimePicker
              minStep={10}
              hourStep={1}
              layout="vertical"
              name="startTime"
              label="Start Time"
            />
            <BNTimePicker
              minStep={60}
              hourStep={1}
              layout="vertical"
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
