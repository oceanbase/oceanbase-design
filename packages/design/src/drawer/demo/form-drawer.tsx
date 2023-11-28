import React, { useState } from 'react';
import { Drawer, Button, Form, Input } from '@oceanbase/design';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(`name: ${name}; age: ${age}`);
    });
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
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
        </Form>
      </Drawer>
    </>
  );
};
