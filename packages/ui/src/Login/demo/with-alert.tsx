/**
 * iframe: 600
 */
import React from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      alertProps={{
        message: 'Login failed, please try again',
      }}
      loginProps={{
        onFinish: values => {
          message.success(`Username: ${values.username} Password: ${values.password}`);
        },
      }}
      showLocale={true}
    />
  );
};
