import React from 'react';
import { Button, Form } from '@oceanbase/design';
import { Input } from 'antd';

const App: React.FC = () => {
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
        ]}
      >
        <Input.Password />
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
