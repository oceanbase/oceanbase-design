import React from 'react';
import { Button, Form, Input, message } from '@oceanbase/design';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => (
  <Form
    name="basic"
    layout="horizontal"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    style={{ maxWidth: 400 }}
  >
    <Form.Item
      label="Username"
      name="username"
      action={<a>Action</a>}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address" action={<a>Action</a>}>
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
