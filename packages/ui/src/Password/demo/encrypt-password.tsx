import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';
import { useState } from 'react';

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

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(`表单校验通过 username：${username}, password：${password}`);
    });
  };

  const publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCSGILf7fzln9HSr8hyUYcKerQCOYiqimnztUJnL90ReId16nZbY3Jwgrw2Mhy2p3YV7KA+5ostLKYflrZC+km1Tredw/tttCFgJYvUEURHjdXxhu3U1IKWSYRQ+8vEICaSuH/NEFwWlsEKxY2iGbs/3D/xYGr9hsREULYn5M1cOwIDAQAB"

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
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
        <Password onValidate={setPassed} publicKey={publicKey}/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
