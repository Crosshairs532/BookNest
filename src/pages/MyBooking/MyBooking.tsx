/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout } from "antd";

import { Outlet, useParams } from "react-router-dom";
import Siderbar from "./MySidebar";
import { useEffect } from "react";
import { useGetMyBookingsQuery } from "../../redux/features/myBooking/myBooking.api";
// import { Siderbar } from "./Sidebar";
const { Header, Content, Footer } = Layout;

const MyBooking = () => {
  return (
    <div>
      <Layout style={{ height: "100%" }}>
        <Siderbar></Siderbar>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BookNest ©{new Date().getFullYear()}- website Created by Md. Samsul
            Arefin
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MyBooking;
