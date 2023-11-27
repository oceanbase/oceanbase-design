import React, { useState } from 'react';
import { Drawer, Button, Form, Input } from '@oceanbase/design';

const FormItem = Form.Item;

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(`name: ${name} ;age: ${age}`);
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
          handleSubmit;
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false} hideRequiredMark={true}>
          <FormItem name="name" label="姓名">
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem name="age" label="年龄">
            <Input placeholder="请输入" />
          </FormItem>
        </Form>
      </Drawer>
    </>
  );
};
