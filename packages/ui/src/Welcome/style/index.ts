import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type WelcomeToken = OBToken;

export const genWelcomeStyle: GenerateStyle<WelcomeToken> = (
  token: WelcomeToken
): CSSObject => {
  const { componentCls, antCls, colorBgContainer, colorText, colorTextSecondary, colorTextTertiary, colorTextQuaternary, colorPrimary } = token;

  return {
    [`${componentCls}-container`]: {
      height: '100%',
      paddingBottom: '0 !important',
      backgroundColor: colorBgContainer,
      '.tech-page-container-content': {
        padding: '0 !important',
      },
      [`${componentCls}-page-header`]: {
        height: 272,
        paddingTop: 72,
        paddingLeft: 100,
        color: colorBgContainer,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        p: {
          textAlign: 'justify',
        },
        img: {
          width: 80,
        },
        [`${componentCls}-title`]: {
          fontSize: 32,
          fontFamily: 'SFProText-Medium',
        },
        [`${componentCls}-description`]: {
          marginTop: 16,
          marginBottom: 32,
          fontFamily: 'SFProText-Regular',
          opacity: 0.85,
        },
      },
      [`${componentCls}-introduce`]: {
        margin: '0 32px',
        marginTop: -48,
        marginBottom: 40,
        [`${antCls}-card-body`]: {
          padding: '48px 68px',
          boxShadow: '0 1px 40px 2px rgba(28, 116, 230, 0.1)',
        },
        [`${componentCls}-item`]: {
          display: 'flex',
          img: {
            marginRight: 12,
          },
          '.title': {
            color: colorText,
            fontSize: 16,
            fontFamily: 'PingFangSC-Medium',
          },
          '.description': {
            marginTop: 4,
            color: colorTextSecondary,
            fontFamily: 'SFProText-Regular',
          },
        },
      },
      [`${componentCls}-content`]: {
        padding: '0 32px',
        paddingBottom: 90,
        [`${componentCls}-left`]: {
          padding: '0 36px',
          borderRight: '1px solid #e8e8e8',
          [`${componentCls}-item`]: {
            display: 'flex',
            padding: '24px 24px',
            [`${componentCls}-order-wrapper`]: {
              [`${componentCls}-order`]: {
                width: 24,
                height: 24,
                marginRight: 12,
                color: colorTextQuaternary,
                textAlign: 'center',
                border: `1px solid ${colorTextQuaternary}`,
                borderRadius: 24,
              },
            },
            [`${componentCls}-title`]: {
              marginTop: 0,
              color: colorText,
              fontSize: 16,
            },
            [`${componentCls}-description`]: {
              marginTop: 8,
              color: colorTextTertiary,
            },
          },
          [`${componentCls}-btn-wrapper`]: {
            marginRight: 24,
            marginLeft: 60,
          },
        },
        [`${componentCls}-right`]: {
          padding: '24px 64px',
          [`${componentCls}-title`]: {
            marginBottom: 16,
            color: colorText,
            fontSize: 16,
            fontFamily: 'PingFangSC-Medium',
          },
          [`${antCls}-btn`]: {
            marginRight: 12,
            marginBottom: 12,
            background: 'rgba(24, 144, 255, 0.06)',
            border: 'none',
          },
          [`${componentCls}-more`]: {
            background: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    [`${componentCls}-step`]: {
      display: 'flex',
      marginBottom: 30,
      padding: '20px 30px 20px 0',
      background: colorBgContainer,
      border: '1px solid rgba(0, 0, 0, 0.06)',
      borderRadius: 2,
      '&:hover': {
        boxShadow: '0 4px 16px 0',
        cursor: 'pointer',
      },
      '&:nth-child(even)': {
        marginRight: 0,
      },
      [`${componentCls}-step-left`]: {
        padding: '0 20px',
      },
      [`${componentCls}-step-right`]: {
        [`${componentCls}-step-title`]: {
          color: colorText,
          fontSize: 16,
          lineHeight: 24,
        },
        [`${componentCls}-step-description`]: {
          color: colorTextTertiary,
        },
      },
      [`${componentCls}-step-operations`]: {
        color: colorPrimary,
        fontSize: 14,
        lineHeight: 22,
      },
    },
    '.borderRight': {
      borderRight: '1px solid #e8e8e8',
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Welcome', token => {
    return [genWelcomeStyle(token as WelcomeToken)];
  });
  return useStyle(prefixCls);
};

