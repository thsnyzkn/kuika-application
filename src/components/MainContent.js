import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";
import NavContainer from "./NavContainer";
import FlexContainer from "./FlexContainer";
const MainContent = () => {
  const { Content } = Layout;

  return (
    <Content style={{ background: "rgb(247,247,247)", marginTop: "2%" }}>
      <NavContainer>
        {" "}
        <NavBar />
      </NavContainer>
      <FlexContainer />
    </Content>
  );
};

export default MainContent;
