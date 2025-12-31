import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type SelectToken = FullToken<'Select'>;

export const genSelectStyle: GenerateStyle<SelectToken> = (token: SelectToken): CSSObject => {
  const { antCls, componentCls } = token;
  const tagCls = `${antCls}-tag`;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-selection-placeholder`]: {
        fontWeight: token.fontWeightWeak,
      },
      [`${componentCls}-clear`]: {
        color: token.colorTextTertiary,
      },
      [`${componentCls}-selector`]: {
        [`${tagCls}`]: {
          marginInlineEnd: token.marginXXS,
        },
      },
    },
  };
};

export default genStyleHooks('Select', token => {
  return [genSelectStyle(token as SelectToken)];
});
