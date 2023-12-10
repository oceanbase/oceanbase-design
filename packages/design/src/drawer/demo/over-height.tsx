import React, { useState } from 'react';
import { Button, Descriptions, Drawer, Form, Input, Space } from '@oceanbase/design';
import { range } from 'lodash';
import { DownOutlined, UpOutlined } from '@oceanbase/icons';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

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
          Open Drawer with dynamic content
        </Button>
        <Button
          onClick={() => {
            setOpen3(true);
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
        title="Drawer with dynamic content"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          {range(1, 5).map(item => (
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
          <Button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            icon={collapsed ? <DownOutlined /> : <UpOutlined />}
          >
            {collapsed ? 'Expand' : 'Collapse'}
          </Button>
          {collapsed
            ? null
            : range(5, 20).map(item => (
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
        open={open3}
        title="Drawer without footer"
        onCancel={() => {
          setOpen3(false);
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
