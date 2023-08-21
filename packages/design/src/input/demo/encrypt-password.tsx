import { Button, Form, Input } from '@oceanbase/design';
import React, { useState } from 'react';
import useEncrypt from '../../_util/useEncrypt';

const App: React.FC = () => {
  const { encrypt } = useEncrypt();

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

  const publicKey =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDsHofawSO/g3F45RXdIQoss2UNH2FQL7hWcbtNIsK3jt728Veg2R4Jasyfvxz7RwPIrfImsM7ZXI2R+matPLsL06KTecWtsXgtM/hLcEB31T4AABInS/QjG8/lIEc/QWic0/sm/Skn7vXw3KrV24LAi5P7oQjE7X3HMRnYMnrMFQIDAQAB';

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
        <Input.Password
          onValidate={setPassed}
          customEncryption={val => {
            return encrypt(val, publicKey);
          }}
          // publicKey={publicKey}
        />
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
