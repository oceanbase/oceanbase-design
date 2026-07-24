import React, { useState } from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const [passed, setPassed] = useState(false);
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

  const rules = [
    {
      validate: val => val?.length >= 8,
      message: 'At least 8 characters',
    },
    {
      validate: val => {
        if (/[a-z]+/.test(val) && /[A-Z]+/.test(val)) {
          return true;
        }
        return false;
      },
      message: 'Contains lowercase (a-z) and uppercase (A-Z) letters',
    },
    {
      message: 'Contains at least one digit (0-9) or symbol',
      validate: val => {
        return /([0-9]|[._+@#$%])+/.test(val);
      },
    },
  ];

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
          {
            required: true,
            message: 'Please enter password',
          },
          {
            validator: (rule, value, callback) => {
              if (value && !passed) {
                callback('Password does not meet requirements');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <Password rules={rules} onValidate={setPassed} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
