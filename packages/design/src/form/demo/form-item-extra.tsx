import { Button, Checkbox, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => {
  return (
    <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Username"
        extra="This is username extra."
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        extra="This is password extra."
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
