import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type CheckboxToken = FullToken<'Checkbox'>;

export const genCheckboxStyle: GenerateStyle<CheckboxToken> = (token: CheckboxToken): CSSObject => {
  const { componentCls, fontSize, fontSizeLG, lineHeight } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}`]: {
        alignSelf: 'baseline',
        [`${componentCls}-inner`]: {
          transform: `translate(0px, ${(fontSize * lineHeight - fontSizeLG) / 2}px)`,
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Checkbox', token => {
    return [genCheckboxStyle(token as CheckboxToken)];
  });
  return useStyle(prefixCls);
};
