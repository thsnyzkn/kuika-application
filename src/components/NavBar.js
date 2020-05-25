import React from "react";
import { Menu } from "antd";

const NavBar = () => {
  const menuStyle = {
    background: "transparent",
    position: "absolute",
    top: "0%",
    right: " 32%",
    border: "0px",
    fontSize: "18px",
  };
  return (
    <Menu style={menuStyle} theme="light" mode="horizontal">
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Support</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
  );
};

export default NavBar;
