import { Button, ConfigProvider, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Failed');
  console.log(errorInfo);
};

const App: React.FC = () => (
  <ConfigProvider
    form={{
      requiredMark: true,
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      hideRequiredMark={true}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default App;
