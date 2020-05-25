import React from "react";
import { Layout } from "antd";
const NavContainer = ({ children }) => {
  const { Header } = Layout;
  const headerStyle = {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "transparent",
  };
  return <Header style={headerStyle}>{children}</Header>;
};

export default NavContainer;
