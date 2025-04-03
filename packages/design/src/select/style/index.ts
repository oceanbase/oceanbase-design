import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type SelectToken = FullToken<'Select'>;

export const genSelectStyle: GenerateStyle<SelectToken> = (token: SelectToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-arrow${componentCls}-arrow-loading`]: {
        color: token.colorTextTertiary,
      },
    },
    [`${componentCls}-text`]: {
      [`${componentCls}-selector`]: {
        background: 'none !important',
        border: 'none !important',
      },
      [`${componentCls}-selector:hover`]: {
        background: `${token.colorInfoBgHover} !important`,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Select', token => {
    return [genSelectStyle(token as SelectToken)];
  });
  return useStyle(prefixCls);
};
