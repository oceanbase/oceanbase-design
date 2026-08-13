import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

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

export default genStyleHooks('Space', token => {
  return [genSpaceStyle(token as SpaceToken)];
});
