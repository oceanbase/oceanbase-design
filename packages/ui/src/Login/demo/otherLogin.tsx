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
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(`Register: username: ${values.username} password: ${values.password}`);
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
          message.success(`Login: username: ${values.username} password: ${values.password}`);
        },
      }}
      otherLoginProps={{
        onFinish: values => {
          message.success(`Login: username: ${''} password: ${''}`);
        },
      }}
      showOtherLoginButton={true}
      enableRegister={true}
      showLocale={true}
    />
  );
};
