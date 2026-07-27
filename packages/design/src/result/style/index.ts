import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type ResultToken = FullToken<'Result'>;

const RESULT_ICON_SIZE = 140;

export const genResultStyle: GenerateStyle<ResultToken> = (token: ResultToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-icon`]: {
        fontSize: RESULT_ICON_SIZE,
        lineHeight: 1,
        marginBottom: 0,
        '& > .anticon, & > span': {
          fontSize: RESULT_ICON_SIZE,
          lineHeight: 1,
        },
        '& svg': {
          width: RESULT_ICON_SIZE,
          height: RESULT_ICON_SIZE,
        },
      },
      [`${componentCls}-title`]: {
        color: token.colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeHeading4,
        lineHeight: token.lineHeightHeading4,
        marginTop: token.marginLG,
        marginBottom: 0,
      },
      [`${componentCls}-subtitle`]: {
        color: token.colorTextSecondary,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        maxWidth: 600,
        margin: '0px auto',
        marginTop: token.marginXXS,
      },
      [`${componentCls}-extra`]: {
        marginTop: token.margin,
      },
      [`${componentCls}-content`]: {
        maxWidth: 1000,
        margin: '0px auto',
        marginTop: token.marginLG,
        padding: token.paddingLG,
        borderRadius: token.borderRadiusLG,
      },
    },
  };
};

export default genStyleHooks('Result', token => {
  return [genResultStyle(token as ResultToken)];
});
