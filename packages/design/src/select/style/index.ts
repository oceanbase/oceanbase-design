import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type SelectToken = FullToken<'Select'>;

export const genSelectStyle: GenerateStyle<SelectToken> = (token: SelectToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-arrow${componentCls}-arrow-loading`]: {
        color: token.colorTextTertiary,
      },
    },
  };
};

export default genStyleHooks('Select', token => {
  return [genSelectStyle(token as SelectToken)];
});
