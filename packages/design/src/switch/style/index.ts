import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type SwitchToken = FullToken<'Switch'>;

export const genSwitchStyle: GenerateStyle<SwitchToken> = (token: SwitchToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}:not(${componentCls}-checked):not(${componentCls}-disabled):not(${componentCls}-loading)`]:
      {
        background: token.colorTextTertiary,
      },
  };
};

export default genStyleHooks('Switch', token => {
  return [genSwitchStyle(token as SwitchToken)];
});
