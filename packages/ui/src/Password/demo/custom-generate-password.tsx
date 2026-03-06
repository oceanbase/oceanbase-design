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
    alert(`表单校验通过 password：${password}`);
  };
  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        label="密码"
        name="password"
        validateTrigger={['onChange', 'onValidate']}
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            validator: (rule, value, callback) => {
              console.log(passed);
              if (value && !passed) {
                callback('密码设置不符合要求');
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
          generatePassword={() => {
            // your custom password generate logic
            return 'custom_password';
          }}
          onValidate={setPassed}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
