import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type LoginToken = OBToken;

export const genLoginStyle: GenerateStyle<LoginToken> = (token: LoginToken): CSSObject => {
  const {
    componentCls,
    antCls,
    iconCls,
    colorTextTertiary,
    colorPrimary,
    colorBorder,
    borderRadius,
  } = token;

  return {
    [`${componentCls}-container`]: {
      display: 'flex',
      justifyContent: 'space-between',
      minWidth: 960,
      height: '100vh',
      minHeight: 600,
      overflow: 'auto',
      [`${componentCls}-bg`]: {
        width: '40%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [`${componentCls}-info`]: {
          margin: '185px 48px 0 48px',
          color: '#fff',
          fontWeight: token.fontWeightStrong,
          fontSize: 56,
          fontFamily: 'PingFangSC',
          [`${componentCls}-start`]: {
            marginTop: 22,
            color: '#f4f4f4',
            fontWeight: token.fontWeightStrong,
            fontSize: 32,
            letterSpacing: 0,
          },
        },
      },
      [`${componentCls}-card`]: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: 600,
        backgroundColor: '#fff',
        [`${componentCls}-locale`]: {
          position: 'absolute',
          top: 24,
          right: 24,
          color: colorTextTertiary,
          fontFamily: 'PingFangSC-Regular',
          cursor: 'pointer',
        },
        [`${componentCls}-board`]: {
          position: 'absolute',
          top: 48,
        },
        [`${componentCls}-content`]: {
          marginTop: -60,
          width: 404,
          [`${componentCls}-logo`]: {
            display: 'block',
            height: 68,
            margin: '0 auto',
            marginBottom: 40,
          },
          [`${componentCls}-activate-logo, ${componentCls}-reigster-logo`]: {
            display: 'block',
            height: 68,
            margin: '0 auto',
          },
          [`${componentCls}-register, ${componentCls}-activate`]: {
            [`${antCls}-form-item-with-help`]: {
              marginBottom: 24,
            },
          },
          [`${componentCls}-form`]: {
            width: '100%',
            'input::placeholder': {
              fontSize: token.fontSize,
            },
            [`${antCls}-form-item`]: {
              marginBottom: 24,
              paddingBottom: 0,
            },
            [`${antCls}-input-affix-wrapper`]: {
              [`${antCls}-input:not(${antCls}-input-disabled)`]: {
                boxShadow: 'inset 0 0 0 1000px white !important',
              },
              [`${antCls}-input:-internal-autofill-selected`]: {
                boxShadow: 'inset 0 0 0 1000px white !important',
              },
              [`${antCls}-input:focus:-internal-autofill-selected`]: {
                boxShadow: 'inset 0 0 0 1000px white !important',
              },
            },
            [`${antCls}-input-affix-wrapper ${antCls}-input:not(:first-child)`]: {
              paddingLeft: 8,
            },
            [`${antCls}-input-affix-wrapper-focused`]: {
              borderColor: colorPrimary,
            },
            [`${componentCls}-form-focus-input`]: {
              [`${antCls}-input-prefix`]: {
                [`${iconCls}`]: {
                  color: colorPrimary,
                },
              },
            },
          },
          [`${componentCls}-auth-code`]: {
            display: 'flex',
            alignItems: 'start',
            width: '100%',
            marginBottom: 24,
            paddingBottom: 0,
            [`> ${antCls}-space-item:first-child`]: {
              flex: 1,
            },
            [`${antCls}-form-item`]: {
              marginBottom: 0,
            },
            [`${componentCls}-code-btn`]: {
              position: 'relative',
              height: 38,
              border: `1px solid ${colorBorder}`,
              borderRadius: borderRadius,
              cursor: 'pointer',
              img: {
                height: 38,
                borderRadius: borderRadius,
              },
              [`${componentCls}-code-mask`]: {
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 38,
                color: '#fff',
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: borderRadius,
                cursor: 'pointer',
                opacity: 0,
                transition: 'opacity 0.3s',
                inset: 0,
              },
              [`&.${componentCls}-error, &:hover`]: {
                [`${componentCls}-code-mask`]: {
                  opacity: 1,
                },
              },
            },
          },
          [`${componentCls}-submit-btn`]: {},
          [`${componentCls}-switch-btn`]: {
            marginTop: 24,
            textAlign: 'center',
            cursor: 'pointer',
          },
          [`${componentCls}-watermark-wrapper`]: {
            position: 'absolute',
            bottom: 40,
            width: 404,
            textAlign: 'center',
            [`${componentCls}-watermark`]: {
              height: 16,
            },
          },
          [`${componentCls}-alert`]: {
            marginBottom: 24,
            borderRadius: borderRadius,
          },
        },
      },
      '@media (max-height: 650px)': {
        [`${componentCls}-watermark-wrapper`]: {
          position: 'absolute',
          top: 600,
        },
      },
    },
    [`${componentCls}-container-with-board`]: {
      [`${componentCls}-card`]: {
        [`${componentCls}-content`]: {
          marginTop: 0,
        },
      },
    },
    [`${componentCls}-container-mobile`]: {
      flexDirection: 'column',
      minWidth: 'auto',
      [`${componentCls}-banner`]: {
        height: '25%',
      },
      [`${componentCls}-bg`]: {
        width: '100%',
      },
      [`${componentCls}-card`]: {
        alignItems: 'start',
        width: '100%',
        height: '75%',
        marginTop: -48,
        padding: '0 32px',
        borderRadius: '16px 16px 0 0',
        position: 'relative',
        [`${componentCls}-board`]: {
          top: 8,
          left: 24,
        },
        [`${componentCls}-locale`]: {
          top: 8,
        },
        [`${componentCls}-content`]: {
          width: '100%',
          marginTop: 40,
          [`${componentCls}-logo`]: {
            height: 48,
            marginBottom: 24,
          },
          [`${componentCls}-watermark-wrapper`]: {
            width: '100%',
            position: 'static',
            marginTop: 96,
          },
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Login', token => {
    return [genLoginStyle(token as LoginToken)];
  });
  return useStyle(prefixCls);
};
