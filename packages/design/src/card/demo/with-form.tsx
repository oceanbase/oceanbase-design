import React from 'react';
import { Button, Card, Form, Input } from '@oceanbase/design';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(`name: ${name}; age: ${age}`);
    });
  };

  return (
    <Card>
      <Form layout="vertical" form={form} preserve={false}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Name is required',
            },
          ]}
        >
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: 'Age is required',
            },
          ]}
        >
          <Input placeholder="age" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
