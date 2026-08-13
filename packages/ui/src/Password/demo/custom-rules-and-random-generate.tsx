import React from 'react';
import { Button, Form } from '@oceanbase/design';
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

const generatePasswordRegex =
  /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\d._+@#$%]{8,32}$/;

export default () => {
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

  const onFinish = (values: { password?: string }) => {
    alert(`Form validation passed. password: ${values.password}`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
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
        <Password rules={rules} generatePasswordRegex={generatePasswordRegex} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
