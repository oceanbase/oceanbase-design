import React, { useState } from 'react';
import { Button, Form, Input } from '@oceanbase/design';

const App: React.FC = () => {
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

  const onSubmit = () => {
    validateFields().then(values => {
      const { password } = values;
      alert(`表单校验通过 password：${password}`);
    });
  };

  return (
    <Form form={form} {...formItemLayout}>
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
        <Input.Password onValidate={setPassed} rules={true} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
