/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      board="顶部公告"
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
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
