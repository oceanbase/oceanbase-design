import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ButtonToken = FullToken<'Button'>;

export const genButtonStyle: GenerateStyle<ButtonToken> = (token: ButtonToken) => {
  return {};
};

export default (prefixCls: string, isAliyun?: boolean) => {
  const useStyle = genComponentStyleHook('Button', token => {
    return isAliyun ? [] : [genButtonStyle(token as ButtonToken)];
  });
  return useStyle(prefixCls);
};
