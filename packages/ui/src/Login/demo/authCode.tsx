/**
 * iframe: 600
 */
import React, { useEffect, useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [authCodeImg, setAuthCodeImg] = useState('');

  const imgs = [
    'https://img.alicdn.com/imgextra/i4/O1CN014Ae3e51fWSZa18uAm_!!6000000004014-2-tps-147-66.png',
    'https://img.alicdn.com/imgextra/i2/O1CN0183Q75f1DhAal3Fxi1_!!6000000000247-2-tps-151-70.png',
  ];
  const loadAuthCodeImg = () => {
    setAuthCodeImg(authCodeImg.endsWith('147-66.png') ? imgs[1] : imgs[0]);
  };

  useEffect(() => {
    loadAuthCodeImg();
  }, []);

  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      loginProps={{
        onFinish: values => {
          message.success(
            `登录：用户名: ${values.username} 密码: ${values.password} 验证码：${values.authCode}`
          );
        },
      }}
      showLocale={true}
      showAuthCode={true}
      authCodeImg={authCodeImg}
      onAuthCodeImgChange={loadAuthCodeImg}
    />
  );
};
