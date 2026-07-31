import React from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

const rules = [
  {
    validate: (val?: string) => Boolean(val && val.length >= 8),
    message: 'At least 8 characters',
  },
  {
    validate: (val?: string) => Boolean(val && /[a-z]+/.test(val) && /[A-Z]+/.test(val)),
    message: 'Contains lowercase (a-z) and uppercase (A-Z) letters',
  },
  {
    message: 'Contains at least one digit (0-9) or symbol',
    validate: (val?: string) => Boolean(val && /([0-9]|[._+@#$%])+/.test(val)),
  },
];

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
        rules={[
          { required: true, message: 'Please enter password' },
          {
            validator: async (_, value) => {
              if (!value) {
                return;
              }
              const failed = rules.find(rule => !rule.validate(value));
              if (failed) {
                throw new Error(failed.message);
              }
            },
          },
        ]}
      >
        <Password rules={rules} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
