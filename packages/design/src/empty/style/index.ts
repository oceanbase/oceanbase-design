import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type EmptyToken = FullToken<'Empty'>;

export const genEmptyStyle: GenerateStyle<EmptyToken> = (token: EmptyToken): CSSObject => {
  const { componentCls, colorTextTertiary, colorBgLayout, colorFill, colorText } = token;

  return {
    [`${componentCls}`]: {
      padding: '32px 0',
      [`${componentCls}-image`]: {
        height: '160px',
        marginBottom: '24px',
        [`.anticon`]: {
          fontSize: '160px',
        },
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
        },
        [`${componentCls}-extra`]: {
          textAlign: 'center',
          marginTop: '24px',
        },
      },
      [`${componentCls}-footer`]: {
        marginTop: '24px!important',
      },
      ['.ant-steps-horizontal']: {
        padding: '24px',
        backgroundColor: colorBgLayout,
        borderRadius: '8px',
        ['.ant-steps-item-container']: {
          ['.ant-steps-item-icon']: {
            backgroundColor: colorFill,
            borderColor: colorFill,
          },
          ['.ant-steps-item-content']: {
            ['.ant-steps-item-title']: {
              color: colorText,
              lineHeight: '24px',
            },
            ['.ant-steps-item-description']: {
              color: colorTextTertiary,
              lineHeight: '20px',
            },
          },
        },
      },
    },

    [`${componentCls}-small`]: {
      padding: '48px 0',
      [`${componentCls}-image`]: {
        height: '54px',
        marginBottom: '8px',
        [`.anticon`]: {
          fontSize: '54px',
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
        minHeight: '400px',
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
