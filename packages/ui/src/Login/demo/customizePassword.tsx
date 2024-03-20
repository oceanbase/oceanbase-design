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
        passwordRule: [
          {
            validator: (rule, value, callback) => {
              if (value?.length >= 8 && value?.length <= 32) {
                // return callback()
                // 只能包含数字，大小写字母，特殊字符
                if (/^[0-9A-Za-z~!@#$%^&*\-_+=|(){}[\]:;,.?\/`"'<>]+$/.test(value)) {
                  let count = 0;
                  // 至少包含一个数字
                  if (/.*[0-9]{1,}.*/.test(value)) {
                    count = count + 1;
                  }
                  // 至少包含一个大写字母
                  if (/.*[A-Z]{1,}.*/.test(value)) {
                    count = count + 1;
                  }
                  // 至少包含一个小写字母
                  if (/.*[a-z]{1,}.*/.test(value)) {
                    count = count + 1;
                  }
                  // 至少包含一个 ~!@#$%^&*\-_+=|(){}[\]:;,.?\/`"'<>
                  if (/[~!@#$%^&*\-_+=|(){}[\]:;,.?\/`"'<>]/.test(value)) {
                    count = count + 1;
                  }
                  if (count >= 3) {
                    callback();
                  } else {
                    callback(
                      '包含以下四种类型字符至少三种及以上：数字（0~9）、大写字母（A~Z）、小写字母(a~z)、特殊符号  ~!@#$%^&*-_+=|(){}[]:;,.?/`' +
                        `"'<></>`
                    );
                  }
                } else {
                  callback(
                    '包含以下四种类型字符至少三种及以上：数字（0~9）、大写字母（A~Z）、小写字母(a~z)、特殊符号  ~!@#$%^&*-_+=|(){}[]:;,.?/' +
                      `"'<>`
                  );
                }
              } else {
                return callback('长度为 8~32 个字符');
              }
            },
          },
        ],
        passwordHelp: (
          <>
            <div>密码为长度 8~32 位</div>
            <div>
              {'包含以下四种类型字符至少三种及以上：数字（0~9）、大写字母（A~Z）、小写字母(a~z)、特殊符号  ~!@#$%^&*-_+=|(){}[]:;,.?/`' +
                `"'<></>`}
            </div>
          </>
        ),
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
