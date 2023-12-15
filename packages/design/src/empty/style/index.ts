import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type EmptyToken = FullToken<'Empty'>;

export const genEmptyStyle: GenerateStyle<EmptyToken> = (token: EmptyToken): CSSObject => {
  const {
    antCls,
    componentCls,
    colorTextTertiary,
    colorBgLayout,
    colorFill,
    colorText,
    colorTextSecondary,
  } = token;

  return {
    [`${componentCls}`]: {
      padding: '32px 0',
      [`${componentCls}-image`]: {
        height: 'auto',
      },
      [`${componentCls}-description`]: {
        [`${componentCls}-title`]: {
          height: '32px',
          lineHeight: '32px',
          fontWeight: 600,
          fontSize: '24px',
          color: '#132039',
          letterSpacing: 0,
          textAlign: 'center',
          marginBottom: '8px',
        },
        [`${componentCls}-subTitle`]: {
          lineHeight: '22px',
          fontWeight: 400,
          fontSize: '14px',
          color: colorTextTertiary,
          letterSpacing: 0,
          textAlign: 'center',
          marginTop: '24px',
        },
        [`${componentCls}-extra`]: {
          textAlign: 'center',
          marginTop: '24px',
        },
      },
      [`${componentCls}-footer`]: {
        marginTop: '24px!important',
      },
      [`${antCls}-steps`]: {
        padding: '24px',
        backgroundColor: colorBgLayout,
        borderRadius: '8px',
        [`${antCls}-steps-item-container`]: {
          [`${antCls}-steps-item-icon`]: {
            height: '26px',
            width: '26px',
            lineHeight: '26px',
            backgroundColor: colorFill,
            borderColor: colorFill,
            [`${antCls}-steps-icon`]: {
              color: colorTextSecondary,
              fontSize: '14px',
            },
          },

          [`${antCls}-steps-item-content`]: {
            [`${antCls}-steps-item-title`]: {
              color: colorText,
              lineHeight: '24px',
              fontSize: '14px',
            },
            ['.ant-steps-item-description']: {
              color: colorTextTertiary,
              lineHeight: '20px',
              fontSize: '12px',
              marginTop: '8px',
            },
          },
        },
      },
    },

    [`${componentCls}-horizontal`]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      [`${componentCls}-image`]: {
        marginBottom: 0,
      },
      [`${componentCls}-description`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '48px',

        [`${componentCls}-title`]: {
          marginTop: 0,
        },
        [`${componentCls}-subTitle`]: {
          textAlign: 'initial',
        },
      },
    },

    // page
    [`${componentCls}-page`]: {
      height: 'calc(100vh - 98px)',
      ['.ant-card-body']: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
      },
    },

    // pageCard
    [`${componentCls}-pageCard`]: {
      ['.ant-card-body']: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Empty', token => {
    return [genEmptyStyle(token as EmptyToken)];
  });
  return useStyle(prefixCls);
};
