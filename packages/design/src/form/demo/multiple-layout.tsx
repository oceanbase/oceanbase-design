import React from 'react';
import { Divider, Form, Input, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <>
      <Form
        name="layout-multiple-horizontal"
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item label="horizontal" name="horizontal" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="vertical"
          name="vertical"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>
      </Form>
      <Divider />
      <Form name="layout-multiple-vertical" layout="vertical">
        <Form.Item label="vertical" required={true}>
          <div
            style={{
              padding: 16,
              borderRadius: token.borderRadius,
              backgroundColor: token.colorBgLayout,
            }}
          >
            <Form.Item
              layout="horizontal"
              label="horizontal"
              name="horizontal"
              rules={[{ required: true }]}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="vertical"
              name="vertical"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
