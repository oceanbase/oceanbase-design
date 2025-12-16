import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type AppToken = FullToken<'App'>;

export const genAppStyle: GenerateStyle<AppToken> = (token: AppToken): CSSObject => {
  const { antCls, componentCls } = token;
  return {};
};

export default genStyleHooks('App', token => {
  return [genAppStyle(token as AppToken)];
});
