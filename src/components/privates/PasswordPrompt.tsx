import React from "react";
import { Breadcrumb, Col, InputNumber, Layout, Menu, Row, theme } from "antd";

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const PasswordPrompt: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };

  return (
    <Layout>
      {/* <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header> */}
      <Content style={{ padding: "0 48px" }}>
        {/* <Breadcrumb
          items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        /> */}
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
            // padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            <InputNumber style={{ width: "1005" }} />
          </div>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default PasswordPrompt;
