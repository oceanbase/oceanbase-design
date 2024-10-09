import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TypographyToken = FullToken<'Typography'>;

export const genTypographyStyle: GenerateStyle<TypographyToken> = (
  token: TypographyToken
): CSSObject => {
  const { componentCls } = token;

  return {
    // inherit color and lineHeight from parent instead of fixed colorText
    [`span${componentCls}`]: {
      lineHeight: 'inherit',
      color: 'inherit',
      fontSize: 'inherit',
    },
    [`div${componentCls}`]: {
      lineHeight: 'inherit',
      color: 'inherit',
      fontSize: 'inherit',
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Typography', token => {
    return [genTypographyStyle(token as TypographyToken)];
  });
  return useStyle(prefixCls);
};
