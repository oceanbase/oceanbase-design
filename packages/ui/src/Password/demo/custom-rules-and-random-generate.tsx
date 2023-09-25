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
      message: '长度至少为 8 个字符',
    },
    {
      validate: val => {
        if (/[a-z]+/.test(val) && /[A-Z]+/.test(val)) {
          return true;
        }
        return false;
      },
      message: '包含小写字母(a-z)和大写字母(A-Z)',
    },
    {
      message: '至少包含一个数字(0-9)或是一个符号',
      validate: val => {
        return /([0-9]|[._+@#$%])+/.test(val);
      },
    },
  ];

  const onFinish = (values: any) => {
    const { password } = values;
    alert(`表单校验通过 password：${password}`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            validator: (rule, value, callback) => {
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
          rules={rules}
          generatePasswordRegex={
            /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\d._+@#$%]{8,32}$/
          }
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
