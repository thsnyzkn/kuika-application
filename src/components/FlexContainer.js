import React from "react";
import { Typography, Row, Col } from "antd";
import ColumnedTextContent from "./ColumnedTextContent";
import WhiteBox from "./WhiteBox";

const FlexContainer = () => {
  const { Title, Paragraph, Text } = Typography;
  const customStyles = {
    rowStyle: {
      marginTop: "10%",
    },
    bigTitleStyle: {
      fontSize: "calc(2rem + 1.2vw)",
    },
    paragraphStyle: {
      fontSize: "20px",
      margin: "2.8rem 0",
      maxWidth: "65%",
    },
  };
  return (
    <Row style={customStyles.rowStyle} justify="center" align="top">
      <Col className="gutter-row" span={9}>
        <Title style={customStyles.bigTitleStyle}>
          New Features <br /> in Designer
        </Title>
        <Paragraph style={customStyles.paragraphStyle} ellipsis={{ rows: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          imperdiet ante, vel ullamcorper justo. Etiam ullamcorper eros est.
        </Paragraph>
      </Col>
      <Col span={12}>
        <WhiteBox top={5} left={6} width={32.292} height={15.278} />
        <WhiteBox top="-18" left="70" width="13.75" height="13.75" />
        <WhiteBox top="-40" left="-10" width="12.75" height="2.5" />
        <WhiteBox top="5" left="-18" width="13.75" height="2.5" />
        <WhiteBox top="5" left="-18" width="13.75" height="2.5" />
      </Col>
      <Col span={21}>
        <Text>12 May 2020</Text>
      </Col>

      <ColumnedTextContent />
    </Row>
  );
};

export default FlexContainer;
