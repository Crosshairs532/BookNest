import { Layout, Menu } from "antd";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
export const Siderbar = () => {
  const dispatch = useDispatch();
  const role = "faculty";
  const items = [
    {
      key: "room-management",
      label: "Room M.",
      children: [
        {
          key: "create-room",
          label: (
            <NavLink to="/admin/dashboard/create-room">Create Room</NavLink>
          ),
        },
        {
          key: "All  Rooms",
          label: <NavLink to="/admin/dashboard/all-rooms">All Rooms</NavLink>,
        },
      ],
    },

    {
      key: "slot-management",
      label: "Slot M.",
      children: [
        {
          key: "create-slots",
          label: (
            <NavLink to="/admin/dashboard/create-slots">Create Slot</NavLink>
          ),
        },
        {
          key: "All Slots",
          label: <NavLink to="/admin/dashboard/all-slots">All Slots</NavLink>,
        },
      ],
    },
    {
      key: "Booking Management",
      label: "Booking M.",
      children: [
        {
          key: "all-booking",
          label: (
            <NavLink to="/admin/dashboard/all-booking">All Booking</NavLink>
          ),
        },
      ],
    },
  ];
  return (
    <Sider
      style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
        }}
      >
        <h1>Book Nest</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Siderbar;
