import React from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

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
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter password' },
          { pattern: generatePasswordRegex, message: 'Password does not meet requirements' },
        ]}
      >
        <Password generatePasswordRegex={generatePasswordRegex} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
