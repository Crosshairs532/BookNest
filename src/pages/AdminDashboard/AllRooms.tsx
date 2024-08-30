import React, { useState } from "react";
import { Pagination, Space, Table } from "antd";
import { useGetAllMeetingRoomsQuery } from "../../redux/features/room/room.api";

const { Column } = Table;
// [
//     { name: "limit", value: 3 },
//     { name: "page", value: value },
//     { name: "sort", value: "id" },
//   ]

const AllRooms: React.FC = () => {
  const [value, setValue] = useState(1);
  const { data, isLoading, isFetching } = useGetAllMeetingRoomsQuery(undefined);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  const datas = data?.data?.map((item, idx) => {
    return {
      key: idx,
      RoomN0: item.roomNo,
      RoomName: item.name,
      Capacity: item.capacity,
      PricePerSlot: item.PricePerSlot,
      FloorNo: item.FloorNo,
    };
  });

  return (
    <>
      <Table loading={isFetching} pagination={false} dataSource={datas}>
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
          render={() => (
            <Space size="middle">
              <h1 className="">Update</h1>
              <h1 className="">Delete</h1>
            </Space>
          )}
        />
      </Table>
      {/* <Pagination></Pagination> */}
    </>
  );
};

export default AllRooms;
