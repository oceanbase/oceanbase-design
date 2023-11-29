import { Button, Checkbox, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Failed');
  console.log(errorInfo);
};

const App: React.FC = () => {
  const formItemLayout1 = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const formItemLayout2 = {
    wrapperCol: {
      offset: 6,
      span: 10,
    },
  };
  return (
    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} {...formItemLayout1}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        tooltip={{
          title: 'This is username',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        tooltip={{
          type: 'light',
          title: 'This is password',
        }}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" {...formItemLayout2}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...formItemLayout2}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
