import React from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(`Form validation passed. username: ${username}, password: ${password}`);
    });
  };

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please enter username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter password' }]}
      >
        <Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
