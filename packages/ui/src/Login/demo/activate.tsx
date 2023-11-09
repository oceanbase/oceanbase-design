/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
// @ts-ignore
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showActivate, setShowActivate] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const onShowActivateChange = () => {
    setShowActivate(false);
  };

  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(`注册：用户名: ${values.username} 密码: ${values.password}`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(`登录：用户名: ${values.username} 密码: ${values.password}`);
          setInitialValues(values);
          setShowActivate(true);
        },
        initialValues,
      }}
      activateFormProps={{
        onFinish: values => {
          message.success(`激活：密码: ${values.password} 确认密码: ${values.confirmPassword}`);
          setShowActivate(false);
        },
      }}
      showActivate={showActivate}
      onShowActivateChange={onShowActivateChange}
      showLocale={true}
    />
  );
};
