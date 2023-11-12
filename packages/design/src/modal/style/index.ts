import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ModalToken = FullToken<'Modal'>;

export const genModalStyle: GenerateStyle<ModalToken> = (token: ModalToken): CSSObject => {
  const {
    antCls,
    componentCls,
    marginXXS,
    marginLG,
    paddingMD,
    borderRadius,
    controlHeight,
    fontSizeHeading5,
    lineHeightHeading5,
  } = token;
  const top = 100;
  const bottom = 100;
  const titleHeight = fontSizeHeading5 * lineHeightHeading5;

  return {
    /* Modal */
    [`${componentCls}:not(${componentCls}-confirm)`]: {
      [`${componentCls}-header`]: {
        marginBottom: marginLG,
      },
      [`${componentCls}-body`]: {
        maxHeight: `calc(100vh - ${top + bottom}px - ${paddingMD * 2}px - ${marginLG * 2}px - ${
          titleHeight + controlHeight
        }px)`,
        overflowY: 'auto',
        borderRadius,
      },
      [`${componentCls}-footer`]: {
        marginTop: marginLG,
      },
    },
    /* Modal.Progress */
    [`${componentCls}${componentCls}-progress`]: {
      [`${componentCls}-content`]: {
        padding: `${token.paddingXL + token.padding}px ${token.paddingLG + token.padding}px`,
        [`${componentCls}-header`]: {
          textAlign: 'center',
          marginBottom: token.marginXXL,
          [`${componentCls}-title`]: {
            fontSize: token.fontSizeHeading4,
          },
        },
        [`${componentCls}-body`]: {
          textAlign: 'center',
          [`${componentCls}-progress-loading`]: {
            fontSize: 200,
            color: token.colorInfo,
          },
          [`${componentCls}-progress-description`]: {
            marginTop: token.marginXXL,
            color: token.colorTextTertiary,
          },
          // should align to left for Alert
          [`${antCls}-alert`]: {
            textAlign: 'left',
          },
        },
        [`${componentCls}-footer`]: {
          textAlign: 'center',
        },
      },
    },
    /* Modal.method() */
    [`${componentCls}-confirm`]: {
      [`${componentCls}-body ${componentCls}-confirm-title +${componentCls}-confirm-content`]: {
        marginBlockStart: marginXXS,
        color: token.colorTextSecondary,
      },
      [`${componentCls}-confirm-btns`]: {
        marginTop: marginLG,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Modal', token => {
    return [genModalStyle(token as ModalToken)];
  });
  return useStyle(prefixCls);
};
