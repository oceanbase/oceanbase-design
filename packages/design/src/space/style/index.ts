import { type FullToken, type GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { CSSObject } from '@ant-design/cssinjs';

export type SpaceToken = FullToken<'Space'>;

export const genSpaceStyle: GenerateStyle<SpaceToken> = (token: SpaceToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-not-support-gap${componentCls}-horizontal`]: {
      [`${componentCls}-item:not(:last-child)`]: {
        marginRight: '8px',
      },
      [`${componentCls}-item-split`]: {
        marginRight: '8px',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-vertical`]: {
      [`${componentCls}-item:not(:last-child)`]: {
        marginBottom: '16px',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-wrap`]: {
      [`${componentCls}-item`]: {
        marginBottom: '16px',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Space', (token: SpaceToken) => {
    return [genSpaceStyle(token)];
  });
  return useStyle(prefixCls);
};
