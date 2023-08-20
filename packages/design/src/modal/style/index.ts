import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ModalToken = FullToken<'Modal'>;

export const genModalStyle: GenerateStyle<ModalToken> = (token: ModalToken): CSSObject => {
  const {
    componentCls,
    marginSM,
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
    [`${componentCls}-confirm`]: {
      [`${componentCls}-body ${componentCls}-confirm-title +${componentCls}-confirm-content`]: {
        marginBlockStart: marginSM,
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
