/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Modal, Pagination, Space, Table } from "antd";
import {
  useDeleteRoomMutation,
  useGetAllMeetingRoomsQuery,
  useUpdateMutation,
} from "../../redux/features/room/room.api";
import BNInput from "../../Component/BNInput";
// import { Form } from "react-router-dom";
import BNForm from "../../Component/BNForm";
import BNNumber from "../../Component/verifyToken/BNNumber";
import BNSelect from "../../Component/BNSelect";
import { toast } from "sonner";
import BNInputIMG from "../../Component/BNInputIMG";
import { er } from "./AllBooking";

const { Column } = Table;
// [
//     { name: "limit", value: 3 },
//     { name: "page", value: value },
//     { name: "sort", value: "id" },
//   ]

const AllRooms: React.FC = () => {
  const [value, setValue] = useState({ page: 0, size: 2 });
  const { data: AllRoom } = useGetAllMeetingRoomsQuery(undefined);
  const { data, isLoading, isFetching } = useGetAllMeetingRoomsQuery(value);
  const [Delete] = useDeleteRoomMutation();
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  console.log(AllRoom);
  const datas = data?.data
    ?.filter((item: any) => !item.isDeleted)
    ?.map((item: any, idx: number) => ({
      _id: item._id,
      key: idx,
      RoomN0: item.roomNo,
      RoomName: item.name,
      Capacity: item.capacity,
      PricePerSlot: item.pricePerSlot,
      FloorNo: item.floorNo,
      images: item.images,
      amenities: item.amenities,
    }));

  console.log(datas);

  return (
    <>
      <Table
        virtual={true}
        loading={isFetching}
        pagination={false}
        dataSource={datas}
      >
        <Column title="Room Name" dataIndex="RoomName" key="Room Name" />
        <Column title="Room N0" dataIndex="RoomN0" key="Room N0" />
        <Column title="Floor No" dataIndex="FloorNo" key="Floor No" />
        <Column title="Capacity" dataIndex="Capacity" key="Capacity" />
        <Column
          title="PricePerSlot"
          dataIndex="PricePerSlot"
          key="PricePerSlot"
        />
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
                    toast.error((err as er)?.message);
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
      <Pagination
        onChange={(page, size) => setValue({ page: page - 1, size: size })}
        defaultCurrent={1}
        pageSize={2}
        total={AllRoom?.data.length}
      ></Pagination>
    </>
  );
};

const Update = ({ item }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update] = useUpdateMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   console.log(item);

  const newItem1 = {
    roomNo: item?.RoomN0,
    name: item?.RoomName,
    capacity: item?.Capacity,
    pricePerSlot: item?.PricePerSlot,
    floorNo: item?.FloorNo,
    images: item?.images,
    amenities: item?.amenities,
  };
  console.log(item);
  let optionsData = newItem1?.amenities?.map((am: any) => {
    return {
      label: am,
      value: am,
    };
  });

  console.log(optionsData);
  const onSubmit = (udata: any) => {
    update({ id: item._id, data: udata });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <BNForm defaultValue={newItem1} onSubmit={onSubmit}>
          <div className=" grid grid-cols-2">
            <BNInput type="text" label="Room Name" name="name" />
            <BNNumber
              label="Price Per Slot"
              name="pricePerSlot"
              type="number"
            />
          </div>
          <div className=" grid grid-cols-2">
            <BNNumber label="Room Capacity" name="capacity" type="number" />
            <BNNumber type="number" name="roomNo" label="Room Number" />
          </div>
          <div className=" grid grid-cols-2">
            <BNNumber label="Floor Number" name="floorNo" type="number" />
            <BNSelect
              options={optionsData}
              label="Amenities"
              name="amenities"
              mode="tags"
            />
          </div>
          <div className=" grid grid-cols-2">
            <BNInputIMG
              defaultVal={item?.images[0]}
              type="text"
              label="Image-1"
              name="img1"
            />
            <BNInputIMG
              defaultVal={item?.images[1]}
              type="text"
              label="Image-2"
              name="img2"
            />
          </div>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </BNForm>
      </Modal>
    </>
  );
};

export default AllRooms;
