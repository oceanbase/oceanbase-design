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
        message: '登录失败，请重新输入',
      }}
      loginProps={{
        onFinish: values => {
          message.success(`用户名: ${values.username} 密码: ${values.password}`);
        },
      }}
      showLocale={true}
    />
  );
};
