import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ButtonToken = FullToken<'Button'>;

export const genButtonStyle: GenerateStyle<ButtonToken> = (token: ButtonToken) => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      // remove box-shadow for button
      boxShadow: 'none !important',
    },
  };
};

export default (prefixCls: string, isAliyun?: boolean) => {
  const useStyle = genComponentStyleHook('Button', token => {
    return [genButtonStyle(token as ButtonToken)];
  });
  return useStyle(prefixCls);
};
