/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout } from "antd";

import { Outlet } from "react-router-dom";
import Siderbar from "./Sidebar";
// import { Siderbar } from "./Sidebar";
const { Header, Content, Footer } = Layout;

const AdminDashboard = () => {
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
              <Outlet></Outlet>
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

export default AdminDashboard;
