import type { CSSObject } from '@ant-design/cssinjs';
import { Card } from '@oceanbase/design';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genProTableStyle: GenerateStyle<OBToken> = (token: OBToken): CSSObject => {
  const { antCls, componentCls, proComponentsCls } = token;
  const proCardComponentCls = `${proComponentsCls}-card`;
  return {
    [`${componentCls}`]: {
      [`${proComponentsCls}-query-filter-actions`]: {
        // reverse position for button group and expand element
        [`${antCls}-space${antCls}-space-horizontal${antCls}-space-align-center`]: {
          flexDirection: 'row-reverse',
        },
      },
      [`${proCardComponentCls}:not(${proCardComponentCls}-no-divider)`]: {
        [`${proCardComponentCls}-body`]: {
          [`${componentCls}-list-toolbar-container`]: {
            borderBottom: `${token.lineWidth}px solid ${token.colorBorderSecondary}`,
          },
        },
      },
      [`${proCardComponentCls}${proCardComponentCls}-no-padding`]: {
        [`${proCardComponentCls}-body`]: {
          paddingInline: 0,
          [`${componentCls}-list-toolbar-container`]: {
            paddingInline: token.paddingLG,
          },
        },
        ...Card.genTableStyle(token.paddingLG, {
          ...token,
          componentCls: proCardComponentCls,
        }),
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ProTable', token => {
    return [genProTableStyle(token as OBToken)];
  });
  return useStyle(prefixCls);
};
