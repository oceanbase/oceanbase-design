import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type ModalToken = FullToken<'Modal'>;

export const genModalStyle: GenerateStyle<ModalToken> = (token: ModalToken): CSSObject => {
  const {
    antCls,
    componentCls,
    marginLG,
    fontSizeHeading5,
    lineHeightHeading5,
    fontSizeHeading3,
    colorSplit,
    calc,
  } = token;
  const top = 100;
  const bottom = 100;
  const titleHeight = calc(fontSizeHeading5).mul(lineHeightHeading5).equal();

  return {
    /* Modal */
    [`${componentCls}:not(${componentCls}-confirm):not(${componentCls}-progress)`]: {
      [`${componentCls}-content`]: {
        paddingBlock: token.padding,
        [`${componentCls}-close`]: {
          marginTop: token.marginXXS,
          marginRight: token.marginXXS,
        },
        [`${componentCls}-header`]: {
          position: 'relative',
          marginBottom: 0,
          paddingBottom: token.padding,
          [`${componentCls}-title`]: {
            fontSize: fontSizeHeading3,
          },
          // 使用伪元素创建贯通的分割线
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: colorSplit,
            // antd Modal content默认padding通常是24px，使用负margin让分割线贯通
            // 如果antd使用其他padding值，可能需要调整
            marginLeft: calc(token.paddingLG).mul(-1).equal(),
            marginRight: calc(token.paddingLG).mul(-1).equal(),
          },
        },
        [`${componentCls}-body`]: {
          marginInline: calc(token.marginLG).mul(-1).equal(),
          paddingInline: token.paddingLG,
          paddingBlock: token.paddingLG,
        },
      },
      [`${componentCls}-footer`]: {
        paddingTop: token.padding,
        marginTop: 0,
        [`${antCls}-btn`]: {
          height: 28,
          minHeight: 28,
        },
        [`${componentCls}-footer-content`]: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          [`${componentCls}-footer-extra`]: {
            marginInlineEnd: token.margin,
            // make extra align to start
            textAlign: 'start',
          },
        },
      },
      [`&${componentCls}-no-title`]: {
        [`${componentCls}-content`]: {
          paddingBlockStart: 0,
        },
      },
      [`&${componentCls}${componentCls}-no-footer`]: {
        [`${componentCls}-content`]: {
          paddingBlockEnd: 0,
        },
      },
    },
    /* Modal.Progress */
    [`${componentCls}${componentCls}-progress`]: {
      [`${componentCls}-content`]: {
        padding: token.paddingLG,
        [`${componentCls}-close`]: {
          marginTop: token.marginSM,
          marginRight: token.marginXXS,
        },
        [`${componentCls}-header`]: {
          textAlign: 'center',
          marginBottom: token.marginXXL,
          [`${componentCls}-title`]: {
            fontSize: fontSizeHeading3,
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
          [`${antCls}-btn`]: {
            height: 28,
            minHeight: 28,
          },
        },
      },
    },
    /* Modal.method() */
    [`${componentCls}-confirm`]: {
      [`${componentCls}-content`]: {
        padding: token.paddingLG,
      },
      [`${componentCls}-body`]: {
        [`${componentCls}-confirm-title`]: {
          fontSize: fontSizeHeading3,
        },
        [`${componentCls}-confirm-body > ${token.iconCls}`]: {
          height: calc(token.fontSizeHeading3).mul(token.lineHeight).equal(),
        },
        [`${componentCls}-confirm-paragraph`]: {
          rowGap: token.marginSM,
        },
        [`${componentCls}-confirm-content`]: {
          color: token.colorTextSecondary,
        },
        [`${componentCls}-confirm-btns`]: {
          marginTop: marginLG,
          [`${antCls}-btn`]: {
            height: 28,
            minHeight: 28,
          },
        },
      },
    },
  };
};

export default genStyleHooks('Modal', token => {
  return [genModalStyle(token as ModalToken)];
});
