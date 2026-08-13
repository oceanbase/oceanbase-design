import { type FullToken, type GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { CSSObject } from '@ant-design/cssinjs';

export type SpaceToken = FullToken<'Space'>;

export const genSpaceStyle: GenerateStyle<SpaceToken> = (token: SpaceToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-not-support-gap${componentCls}-horizontal`]: {
      [`${componentCls}-item:not(:last-child)`]: {
        marginRight: 'var(--space-gap-column)',
      },
      [`${componentCls}-item-split`]: {
        marginRight: 'var(--space-gap-column)',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-vertical`]: {
      [`${componentCls}-item:not(:last-child)`]: {
        marginBottom: 'var(--space-gap-row)',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-wrap`]: {
      [`${componentCls}-item`]: {
        marginBottom: 'var(--space-gap-row)',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Space', token => {
    return [genSpaceStyle(token as SpaceToken)];
  });
  return useStyle(prefixCls);
};
