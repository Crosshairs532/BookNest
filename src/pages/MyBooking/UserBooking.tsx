/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import { useGetMyBookingsQuery } from "../../redux/features/myBooking/myBooking.api";
import moment from "moment";

const UserBooking = () => {
  const { Column } = Table;
  const { data, isLoading, isFetching } = useGetMyBookingsQuery(undefined);

  if (!data || isLoading) {
    return <p>Loading..</p>;
  }
  console.log(data, "kpothay");
  const datas = data?.data?.map((item: any, idx: number) => {
    return {
      _id: item._id,
      key: idx,
      RoomNo: item.room.roomNo,
      RoomName: item.room.name,
      date: moment(new Date(item.date)).format("YYYY-MM-DD"),
      startTime: item.slots.startTime,
      endTime: item.slots.endTime,
      isBooked: item.slots.isBooked,
    };
  });

  return (
    <>
      <Table
        virtual={true}
        loading={isFetching}
        pagination={false}
        dataSource={datas}
      >
        <Column title="Room Name" dataIndex="RoomName" key="RoomName" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Start Time" dataIndex="startTime" key="startTime" />
        <Column title="End Time" dataIndex="endTime" key="endTime" />
        <Column
          title="Booking Status"
          dataIndex="isBooked"
          key="isBooked"
          render={(item) => {
            return (
              <h1 className={`${item ? " text-[green]" : " text-blue-500"}`}>
                {item ? "  Booked" : "Pending"}
              </h1>
            );
          }}
        />
      </Table>
    </>
  );
};

export default UserBooking;
