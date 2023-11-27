/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*qUTHQJTYAuEAAAAAAAAAAAAADvSFAQ/original"
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
