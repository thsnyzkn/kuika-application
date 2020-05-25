import React from "react";
import { Layout, Typography, Row, Col, Form, Input, Button } from "antd";
import { EyeFilled, LockFilled, MailFilled } from "@ant-design/icons";

const LoginSideBar = () => {
  const { Sider } = Layout;
  const { Title, Text } = Typography;
  return (
    <>
      <Sider
        width={"30%"}
        style={{
          background: "white",
          paddingTop: "8%",
        }}
      >
        <Row align="middle">
          <Col span={12}>
            <Title>Sign In</Title>
          </Col>
          <Col span={10} offset={2} style={{ textAlign: "right" }}>
            <a href="">Sign up</a>
          </Col>
        </Row>

        <Form
          size="large"
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<MailFilled className="site-form-item-icon" />}
              placeholder="e-mail address..."
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockFilled className="site-form-item-icon" />}
              suffix={<EyeFilled className="site-form-item-icon" />}
              type="password"
              placeholder="password..."
            />
          </Form.Item>
        </Form>

        <Row justify="space-between" align="top">
          <Col>
            <a href="" style={{ fontSize: "20px" }}>
              Forgot Password
            </a>
          </Col>
          <Col>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="login-form-button"
            >
              Sign in
            </Button>
          </Col>
        </Row>
      </Sider>
      <a
        style={{
          position: "absolute",
          right: "20%",
          bottom: "2.5%",
          fontSize: "10px",
        }}
      >
        Terms of Services
      </a>
    </>
  );
};

export default LoginSideBar;
