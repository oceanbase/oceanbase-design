import React from 'react';
import { Button, Dropdown, Form, Input, Space, message } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

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
    layout="vertical"
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
    <Form.Item
      label="Address"
      name="address"
      action={
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: 'Menu 1',
              },
              {
                key: '2',
                label: 'Menu 2',
              },
            ],
          }}
        >
          <Button
            size="small"
            style={{
              // same with label height to avoid overflow
              height: 20,
            }}
          >
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      }
    >
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
