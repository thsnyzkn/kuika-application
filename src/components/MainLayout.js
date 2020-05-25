import React from "react";
import { Layout } from "antd";

const MainLayout = ({ children }) => {
  const layoutStyle = {
    height: "100vh",
    background: "rgb(247,247,247)",
  };
  return <Layout style={layoutStyle}>{children}</Layout>;
};

export default MainLayout;
