import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type AppToken = FullToken<'App'>;

export const genAppStyle: GenerateStyle<AppToken> = (token: AppToken): CSSObject => {
  const { antCls, componentCls } = token;
  return {};
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('App', token => {
    return [genAppStyle(token as AppToken)];
  });
  return useStyle(prefixCls);
};
