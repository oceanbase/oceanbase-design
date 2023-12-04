import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type SegmentedToken = FullToken<'Segmented'>;

export const genSegmentedStyle: GenerateStyle<SegmentedToken> = (
  token: SegmentedToken
): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}`]: {},
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Segmented', (token: SegmentedToken) => {
    return [genSegmentedStyle(token)];
  });
  return useStyle(prefixCls);
};
