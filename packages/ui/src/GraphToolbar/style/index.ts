import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type GraphToolbarToken = OBToken;

export const genGraphToolbarStyle: GenerateStyle<GraphToolbarToken> = (
  token: GraphToolbarToken
): CSSObject => {
  const { componentCls, iconCls, colorTextQuaternary, colorTextSecondary, borderRadius, boxShadowSecondary } = token;

  return {
    [`${componentCls}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [`${componentCls}-pointable`]: {
        cursor: 'pointer',
      },
      [`${componentCls}-disabled`]: {
        color: colorTextQuaternary,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      'span, img': {
        userSelect: 'none',
      },
      '> span:not(:last-child)': {
        marginRight: 16,
      },
      'img:not(:last-child)': {
        marginRight: 16,
      },
      [`${componentCls}-divider`]: {
        margin: 0,
      },
      [`${componentCls}-zoom-wrapper`]: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 90,
        height: 24,
        padding: '0 8px',
        color: colorTextSecondary,
        fontSize: 12,
        backgroundColor: '#f5f6fa',
        borderRadius: borderRadius,
        [`${iconCls}`]: {
          fontSize: 12,
        },
      },
    },
    [`${componentCls}-fixed`]: {
      position: 'absolute',
      top: 24,
      right: 24,
      height: 40,
      padding: '8px 24px',
      background: '#fff',
      borderRadius: 20,
      boxShadow: boxShadowSecondary,
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('GraphToolbar', token => {
    return [genGraphToolbarStyle(token as GraphToolbarToken)];
  });
  return useStyle(prefixCls);
};

