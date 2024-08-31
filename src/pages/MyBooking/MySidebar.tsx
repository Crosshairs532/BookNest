import { Layout, Menu } from "antd";

import { NavLink } from "react-router-dom";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
export const MySiderbar = () => {
  const role = "user";
  const items = [
    {
      key: "all-booking",
      label: <NavLink to={"/my-bookings"}>My Bokings</NavLink>,
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
        <NavLink to={"/"}>
          <h1>Book Nest</h1>
        </NavLink>
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

export default MySiderbar;
