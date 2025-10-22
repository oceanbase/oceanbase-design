import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ResultToken = FullToken<'Result'>;

export const genResultStyle: GenerateStyle<ResultToken> = (token: ResultToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-title`]: {
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeHeading4,
        lineHeight: token.lineHeightHeading4,
      },
      [`${componentCls}-subtitle`]: {
        maxWidth: 600,
        margin: '0px auto',
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

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Result', token => {
    return [genResultStyle(token as ResultToken)];
  });
  return useStyle(prefixCls);
};
