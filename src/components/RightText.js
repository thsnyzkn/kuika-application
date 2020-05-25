import React from "react";
import { Typography, Col } from "antd";

const RightText = ({ top, content, row }) => {
  const { Paragraph } = Typography;
  return (
    <Col span={13} style={{ fontSize: "17px", marginTop: `${top}%` }}>
      <Paragraph ellipsis={{ rows: row }}>{content}</Paragraph>
    </Col>
  );
};

export default RightText;
