import React from "react";
import { Typography, Col } from "antd";

const LeftText = ({ top, content }) => {
  const { Text } = Typography;
  return (
    <Col span={8} style={{ fontSize: "17px", marginTop: `${top}%` }}>
      <Text>{content}</Text>
    </Col>
  );
};

export default LeftText;
