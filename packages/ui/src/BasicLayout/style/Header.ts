import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type HeaderToken = FullToken<any>;

export const genHeaderStyle: GenerateStyle<HeaderToken> = (
  token: HeaderToken
): CSSObject => {
  const { antCls, componentCls } = token;

  return {
    [`${componentCls}`]: {
      position: "fixed",
      zIndex: 10,
      width: "100%",
      height: 48,
      padding: "10px 24px",
      lineHeight: '48px',
      backgroundColor: token.colorBgLayout,
      boxShadow: "inset 0 -1px 0 0 #e2e8f3",

      [`${componentCls}-content`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: token.maxWidth,
        height: "100%",
        margin: "0 auto",
      },

      [`${componentCls}-logo`]: {
        height: 24,
        cursor: 'pointer'
      },
      [`${componentCls}-icon`]: {
        width: 52,
        height: 48,
        lineHeight: '48px',
        textAlign: "center",
        borderRight: "1px solid #e2e8f3",
        borderBottom: "1px solid #e2e8f3",
        cursor: "pointer",
        img: {
          height: 32,
          marginTop: 8
        },
      },
      [`${componentCls}-title`]: {
        /* 占据剩余的全部空间 */
        flex: 1,
        margin: "0 16px",
      },

      [`${componentCls}-extra`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [`${componentCls}-extra-item`]: {
          display: "inline-flex",
          fontSize: 12,
          cursor: "pointer",
          '&:not(:last-child)': {
            marginRight: 24
          },
          [`${componentCls}-extra-icon-wrapper`]: {
            width: 28,
            height: 28,
            lineHeight: '28px',
            textAlign: "center",
            border: "0.88px solid #ced4e1",
            borderRadius: 14,
          },
          [`${componentCls}-extra-user-wrapper`]: {
            height: 28,
            padding: "0 10px",
            lineHeight: '28px',
            border: "0.88px solid #ced4e1",
            borderRadius: 14,
            [`${componentCls}-extra-user-icon`]: {
              marginRight: 6,
            },
          },
        },
      },

      [`${componentCls}-extra-with-label`]: {
        [`${componentCls}-extra-item`]: {
          '&:not(:last-child)': {
            marginRight: '24px !important'
          }
        }
      },

    },

    [`${componentCls}-welcome`]: {
      color: "#fff",
      backgroundColor: "transparent",
      borderBottom: "none",
      [`${componentCls}-extra`]: {
        [`${antCls}-btn`]: {
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          border: "0.5px solid rgba(0, 0, 0, 0.1)",
        },
      },
    },

    [`${componentCls}-about-wrapper`]: {
      [`${componentCls}-about`]: {
        marginTop: 12,
      },
      [`${componentCls}-logo`]: {
        marginTop: 72,
      },
      [`${componentCls}-release-info`]: {
        marginTop: 20,
        marginBottom: 50,
        [`${componentCls}-date`]: {
          fontSize: 12,
          fontFamily: 'Helvetica',
          opacity: 0.45,
        },
      },

      [`${componentCls}-copyright`]: {
        color: "#000",
        fontSize: 12,
        opacity: 0.45,
      },
    }

  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Header', token => {
    return [genHeaderStyle(token as HeaderToken)];
  });

  return useStyle(prefixCls);
};
