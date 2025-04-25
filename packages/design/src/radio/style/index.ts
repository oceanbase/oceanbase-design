import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type RadioToken = FullToken<'Radio'>;

export const genRadioStyle: GenerateStyle<RadioToken> = (token: RadioToken): CSSObject => {
  const { componentCls, radioSize, fontSize, fontSizeLG, lineHeight } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}`]: {
        alignSelf: 'baseline',
        [`${componentCls}-inner`]: {
          marginBottom: -(fontSize * lineHeight - (radioSize || fontSizeLG)) / 2,
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Radio', token => {
    return [genRadioStyle(token as RadioToken)];
  });
  return useStyle(prefixCls);
};
