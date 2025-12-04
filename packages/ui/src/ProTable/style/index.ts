import type { CSSObject } from '@ant-design/cssinjs';
import { Card } from '@oceanbase/design';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';
import { genProCardStyle } from '../../ProCard/style';

export const genProTableStyle = (token: OBToken): CSSObject => {
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
      // Remove nested ProCard box-shadow
      [`& > ${proCardComponentCls}, ${proCardComponentCls}${componentCls}-search-light-filter`]: {
        boxShadow: 'none !important',
      },

      [`${proCardComponentCls}${proCardComponentCls}-no-padding`]: {
        [`${proCardComponentCls}-body`]: {
          paddingInline: 0,
          [`${componentCls}-list-toolbar-container`]: {
            paddingInline: token.paddingLG,
            [`${componentCls}-list-toolbar-title`]: {
              fontWeight: token.fontWeightStrong,
            },
          },
        },
        ...Card.genTableStyle(token.paddingLG, {
          ...token,
          componentCls: proCardComponentCls,
        }),
      },
    },
    ...genProCardStyle(token, proCardComponentCls),
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ProTable', token => {
    return [genProTableStyle(token as OBToken)];
  });
  return useStyle(prefixCls);
};
