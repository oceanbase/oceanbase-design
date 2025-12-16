import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

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

export default genStyleHooks('Space', token => {
  return [genSpaceStyle(token as SpaceToken)];
});
