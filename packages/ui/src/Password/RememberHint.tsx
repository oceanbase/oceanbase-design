import { Space, Typography, theme } from '@oceanbase/design';
import React from 'react';
import { CheckOutlined, CopyOutlined } from '@oceanbase/icons';
import type { PasswordLocale } from './index';

export const PasswordRememberHint: React.FC<{
  value?: string;
  locale: PasswordLocale;
}> = ({ value, locale }) => {
  const { token } = theme.useToken();

  return (
    <span style={{ color: token.colorTextDescription }}>
      {locale.pleaseRememberYourPassword}
      <Typography.Text
        copyable={{
          text: value,
          icon: [
            <Space key="copy" size={token.marginXXS}>
              <CopyOutlined aria-hidden />
              <a>{locale.copyPassword}</a>
            </Space>,
            <Space key="copy-success" size={token.marginXXS}>
              <CheckOutlined aria-hidden />
              <a>{locale.copyPassword}</a>
            </Space>,
          ],
          tooltips: [locale.copyPassword, locale.copySuccessfully],
        }}
        style={{ marginLeft: token.marginXXS }}
      />
    </span>
  );
};
