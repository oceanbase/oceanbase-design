import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type SegmentedToken = FullToken<'Segmented'>;

export const genSegmentedStyle: GenerateStyle<SegmentedToken> = (
  token: SegmentedToken
): CSSObject => {
  const { componentCls, antCls, colorFill, colorFillSecondary } = token;

  return {
    [`${componentCls} >${componentCls}-group`]: {
      [`&:not(:has(${componentCls}-thumb)) >${componentCls}-item`]: {
        [`&:not(.ant-segmented-item-selected) >${componentCls}-item-label`]: {
          ['&:hover']: {
            [`${antCls}-badge >${antCls}-badge-count`]: {
              backgroundColor: colorFill,
            },
          },
          ['&:active']: {
            [`${antCls}-badge >${antCls}-badge-count`]: {
              backgroundColor: colorFillSecondary,
            },
          },
        },
      },
      [`>${componentCls}-item`]: {
        [`>${componentCls}-item-label`]: {
          [`${antCls}-badge >${antCls}-badge-count`]: {
            marginInlineStart: 4,
            backgroundColor: colorFillSecondary,
            color: 'inherit',
            boxShadow: 'none',
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Segmented', token => {
    return [genSegmentedStyle(token as SegmentedToken)];
  });
  return useStyle(prefixCls);
};
