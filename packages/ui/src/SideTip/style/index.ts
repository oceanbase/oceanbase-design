import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type SideTipToken = OBToken;

export const genSideTipStyle: GenerateStyle<SideTipToken> = (token: SideTipToken): CSSObject => {
  const { componentCls, boxShadowSecondary, colorTextQuaternary, colorTextSecondary } = token;

  return {
    [`${componentCls}-container`]: {
      position: 'fixed',
      zIndex: 0,
      fontSize: 14,
      cursor: 'pointer',
      insetInlineEnd: 24,
      insetBlockEnd: 24,
      [`&.${componentCls}-container-dragged`]: {
        cursor: 'grab',
      },
      [`&.${componentCls}-container-disabled`]: {
        cursor: 'not-allowed',
      },
      [`&.${componentCls}-container-hide`]: {
        transition: 'all 0.3s',
      },
      '@media screen and (max-width: 768px)': {
        display: 'none',
      },
      [`&.${componentCls}-container-hide-not-dragged:hover`]: {
        insetInlineEnd: '0 !important',
      },
      [`${componentCls}-hide`]: {
        position: 'absolute',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        background: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 20,
        transform: 'scale(0)',
        cursor: 'pointer',
        opacity: 0,
        transition: 'all 0.18s ease-out 0.18s',
        insetBlockStart: 0,
        insetInlineEnd: -22,
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.35)',
        },
        [`${componentCls}-hide-icon`]: {
          width: 6,
          height: 2,
          background: '#fff',
          borderRadius: 4,
        },
        [`&.${componentCls}-hide-hovered`]: {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
      [`${componentCls}-button`]: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: boxShadowSecondary,
        cursor: 'pointer',
        transition:
          'background-color 0.2s ease 0.1s, opacity 0.2s ease 0s, transform 0.2s ease 0.1s',
        userSelect: 'none',
        [`&${componentCls}-button-primary`]: {
          backgroundColor: `${token.colorPrimary} !important`,
        },
        [`&${componentCls}-button-small`]: {
          width: 40,
          height: 40,
        },
        [`&${componentCls}-button-disabled`]: {
          backgroundColor: `${colorTextQuaternary} !important`,
          cursor: 'not-allowed',
        },
        '&:hover': {
          opacity: 1,
        },
        [`${componentCls}-button-loading`]: {
          position: 'absolute',
          width: 56,
          height: 56,
          color: token.colorPrimary,
          fontSize: 56,
          insetBlockStart: 0,
          insetInlineEnd: 0,
          [`&${componentCls}-button-loading-primary`]: {
            color: '#fff',
          },
          [`&${componentCls}-button-loading-small`]: {
            width: 40,
            height: 40,
            fontSize: 40,
            lineHeight: 40,
          },
        },
        [`${componentCls}-button-close`]: {
          position: 'absolute',
          width: 24,
          height: 24,
          color: colorTextSecondary,
          fontSize: 24,
          transform: 'translate(-50%, -50%) scale(0.4) rotate(-45deg)',
          opacity: 0,
          transition: 'all 0.3s linear',
          userSelect: 'none',
          insetBlockStart: '50%',
          insetInlineStart: '50%',
          [`&.${componentCls}-button-close-primary`]: {
            color: '#fff',
          },
          [`&.${componentCls}-button-close-show`]: {
            transform: 'translate(-50%, -50%)',
            opacity: 1,
          },
          [`&.${componentCls}-button-close-small`]: {
            width: 16,
            height: 16,
            fontSize: 16,
            lineHeight: 16,
          },
        },
        [`${componentCls}-button-icon`]: {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          color: colorTextSecondary,
          fontSize: 24,
          lineHeight: 24,
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          transition: 'all 0.3s linear',
          userSelect: 'none',
          insetBlockStart: '50%',
          insetInlineStart: '50%',
          '> *': {
            fontSize: 'inherit',
            color: 'inherit',
          },
          img: {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          },
          [`&.${componentCls}-button-icon-open`]: {
            transform: 'translate(-50%, -50%) scale(0.4) rotate(45deg)',
            opacity: 0,
          },
          [`&.${componentCls}-button-icon-disabled`]: {
            color: colorTextQuaternary,
          },
          [`&${componentCls}-button-icon-primary`]: {
            color: '#fff !important',
            '> *': {
              color: '#fff !important',
            },
          },
          [`&${componentCls}-button-icon-small`]: {
            width: 16,
            height: 16,
            fontSize: 16,
            lineHeight: 16,
          },
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('SideTip', token => {
    return [genSideTipStyle(token as SideTipToken)];
  });
  return useStyle(prefixCls);
};
