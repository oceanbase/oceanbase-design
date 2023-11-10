import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';

export type SegmentedToken = FullToken<'Segmented'>;

export const genSegmentedStyle: GenerateStyle<SegmentedToken> = (
  token: SegmentedToken
): CSSObject => {
  const { componentCls, colorPrimary } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-ellipsis`]: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
      [`${componentCls}-item-selected`]: {
        color: `${colorPrimary} !important`,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Segmented', (token: SegmentedToken) => {
    return [genSegmentedStyle(token)];
  });
  return useStyle(prefixCls);
};
