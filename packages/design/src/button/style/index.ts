import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ButtonToken = FullToken<'Button'>;

export const genButtonStyle: GenerateStyle<ButtonToken> = (token: ButtonToken) => {
  const { componentCls } = token;
  return {
    [`${componentCls}${componentCls}-primary:not([disabled]):not(${componentCls}-disabled):not(${componentCls}-dangerous):not(${componentCls}-background-ghost)`]:
      {
        background: 'linear-gradient(-45deg, #002bff 0%, #0080ff 100%)',
        border: 'none',
        boxShadow: 'none',
        ['&:hover']: {
          background: 'linear-gradient(-45deg, #002bff 60%, #0080ff 100%)',
        },
        ['&:active']: {
          background: 'linear-gradient(-45deg, #002bff 90%, #0080ff 100%)',
        },
      },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Button', token => {
    return [genButtonStyle(token)];
  });
  return useStyle(prefixCls);
};
