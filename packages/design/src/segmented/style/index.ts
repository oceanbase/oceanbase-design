import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';

export type SegmentedToken = FullToken<'Segmented'>;

export const genSegmentedStyle: GenerateStyle<SegmentedToken> = (
  token: SegmentedToken
): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-ellipsis`]: {
        // maxWidth: '68px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
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
