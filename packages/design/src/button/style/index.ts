import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ButtonToken = FullToken<'Button'>;

export const genButtonStyle: GenerateStyle<ButtonToken> = (token: ButtonToken) => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      // remove box-shadow for button
      boxShadow: 'none !important',
    },
    [`${componentCls}${componentCls}-primary:not([disabled]):not(${componentCls}-disabled):not(${componentCls}-dangerous):not(${componentCls}-background-ghost)`]:
      {
        background: 'linear-gradient(-59deg, #002BFF 0%, #0080FF 100%)',
        border: 'none',
        ['&:hover']: {
          background: 'linear-gradient(120deg, #1AA0FF 0%, #1A53FF 100%)',
        },
        ['&:active']: {
          background: 'linear-gradient(120deg, #0060E6 0%, #0013E6 100%)',
        },
      },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Button', token => {
    return [genButtonStyle(token as ButtonToken)];
  });
  return useStyle(prefixCls);
};
