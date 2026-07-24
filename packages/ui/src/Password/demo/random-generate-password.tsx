import React, { useState } from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [passed, setPassed] = useState(true);
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

  const onFinish = (values: any) => {
    const { password } = values;
    alert(`Form validation passed. password: ${password}`);
  };
  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        label="Password"
        name="password"
        validateTrigger={['onChange', 'onValidate']}
        rules={[
          {
            required: true,
            message: 'Please enter password',
          },
          {
            validator: (rule, value, callback) => {
              console.log(passed);
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
