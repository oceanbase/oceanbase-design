import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type EmptyToken = FullToken<'Empty'>;

export const genEmptyStyle: GenerateStyle<EmptyToken> = (token: EmptyToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      padding: '48px 0',
      [`${componentCls}-image`]: {
        height: 54,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Empty', token => {
    return [genEmptyStyle(token as EmptyToken)];
  });
  return useStyle(prefixCls);
};
