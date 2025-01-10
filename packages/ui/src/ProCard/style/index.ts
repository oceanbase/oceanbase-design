import type { CSSObject } from '@ant-design/cssinjs';
import { Card } from '@oceanbase/design';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genTableStyle } from '@oceanbase/design/es/card/style';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genProCardStyle: GenerateStyle<OBToken> = (token: OBToken): CSSObject => {
  const { componentCls } = token;
  return {
    // no body padding card
    [`${componentCls}${componentCls}-no-body-padding`]: {
      [`${componentCls}-header`]: {
        paddingBlockEnd: token.padding,
      },
      ...Card.genTableStyle(token.paddingLG, token),
    },
    // no body padding small card
    [`${componentCls}${componentCls}-no-body-padding${componentCls}-size-small`]: {
      [`${componentCls}-header`]: {
        paddingBlockEnd: token.paddingXS,
      },
      ...Card.genTableStyle(token.paddingSM, token),
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ProCard', token => {
    return [genProCardStyle(token as OBToken)];
  });
  return useStyle(prefixCls);
};
