import React, { useState } from 'react';
import { Button, Descriptions, Drawer, Form, Input, Space } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(`name: ${name}; age: ${age}`);
    });
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Open Drawer with footer
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Open Drawer without footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Drawer with footer"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          {range(1, 20).map(item => (
            <Form.Item
              key={item}
              name={`item ${item}`}
              label="Name"
              rules={[
                {
                  required: true,
                  message: `item ${item} is required`,
                },
              ]}
            >
              <Input placeholder={`item ${item}`} />
            </Form.Item>
          ))}
        </Form>
      </Drawer>
      <Drawer
        open={open2}
        title="Drawer without footer"
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <Descriptions layout="vertical" column={1}>
          {range(1, 20).map(item => (
            <Descriptions.Item key={item} label={`item ${item}`}>
              {`Some message of item ${item}`}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Drawer>
    </>
  );
};
