import React, { useState } from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [passed, setPassed] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
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

  const onFinish = (values: any) => {
    const { password } = values;
    alert(`Form validation passed. password: ${password}`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
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
        <Password
          rules={rules}
          generatePasswordRegex={
            /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\d._+@#$%]{8,32}$/
          }
          onValidate={setPassed}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
