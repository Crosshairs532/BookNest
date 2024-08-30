import { Button, Modal, Space, Table } from "antd";

import { toast } from "sonner";

import {
  useDeleteBookingMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} from "../../redux/features/Booking/booking.api";

const { Column } = Table;
// [
//     { name: "limit", value: 3 },
//     { name: "page", value: value },
//     { name: "sort", value: "id" },
//   ]

const AllBooking: React.FC = () => {
  //   const [value, setValue] = useState(1);

  //   Room Name, User Name, Date & Time, Status (Confirmed/Unconfirmed).
  const {
    data: bookings,

    isFetching,
  } = useGetAllBookingQuery(undefined);
  const [Delete] = useDeleteBookingMutation();
  const [Update] = useUpdateBookingMutation();

  console.log(bookings);
  const datas = bookings?.data.map((booking) => {
    return {
      RoomName: booking?.room.name,
      userName: booking?.user.name,
      date: booking?.date,
      status: booking?.status,
    };
  });

  const handleDelete = async (item) => {
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
        <Column title="User Name" dataIndex="userName" key="userName" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          render={(item) => (
            <h1
              className={`${
                item?.isConfirmed ? " text-[green]" : " text-blue-500"
              }`}
            >
              {item?.isConfirmed ? "Confirmed" : "Pending"}
            </h1>
          )}
        />

        <Column
          title="Action Buttons"
          key="action"
          render={(item) => (
            <Space size="middle">
              <h1>Approve</h1>
              <h1>Reject</h1>
              <h1 onClick={() => handleDelete(item)}>Delete</h1>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

// const Update = ({ item, roomNames, roomNumbers }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [update] = useUpdateSlotMutation();
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   const newItem1 = {
//     roomNo: item?.RoomN0,
//     name: item?.RoomName,
//     date: item.date,
//   };

//   const onSubmit = async (udata) => {
//     // data: new Date(udata.date).toISOString(),

//     const slotData = {
//       startTime: moment(new Date(udata.startTime).toISOString()).format(
//         "HH:mm"
//       ),
//       endTime: moment(new Date(udata.endTime).toISOString()).format("HH:mm"),
//     };
//     console.log(slotData);
//     try {
//       const res = await update({ id: item._id, data: slotData });
//       if (res.data) {
//         toast.success("updated successfully");
//       }
//       if (res.error) {
//         toast.error(res.error?.data?.message);
//       }
//     } catch (err) {
//       toast.error(err?.message);
//     }
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Update
//       </Button>
//       <Modal
//         width={"50vw"}
//         title="Basic Modal"
//         open={isModalOpen}
//         onCancel={handleCancel}
//       >
//         <BNForm defaultValue={newItem1} onSubmit={onSubmit}>
//           <div className=" grid gap-[2vw] grid-cols-2">
//             {/* <BNInput
//               layout="vertical"
//               type="text"
//               label="Room Name"
//               name="name"
//             /> */}
//             {/* <BNSelect
//               mode="multiple"
//               options={roomNames}
//               name="roomName"
//               label="Room Names"
//             /> */}
//             {/* <BNSelect
//               mode="multiple"
//               options={roomNames}
//               name="roomName"
//               label="Room Names"
//             /> */}

//             {/* <BNNumber
//               layout="vertical"
//               type="number"
//               name="roomNo"
//               label="Room No."
//             /> */}
//           </div>
//           <div className=" grid gap-[2vw] grid-cols-2">
//             {/* <BNDatePicker2 layout="vertical" name="date" label="Date" /> */}
//             <BNTimePicker
//               layout="vertical"
//               name="startTime"
//               label="Start Time"
//             />
//             <BNTimePicker layout="vertical" name="endTime" label="End Time" />
//           </div>

//           <Button
//             style={{ marginTop: "2vw" }}
//             type="primary"
//             htmlType="submit"
//             block
//           >
//             UPDATE
//           </Button>
//         </BNForm>
//       </Modal>
//     </>
//   );
// };

export default AllBooking;
