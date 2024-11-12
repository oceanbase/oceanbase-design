import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genProTableStyle: GenerateStyle<OBToken> = (token: OBToken): CSSObject => {
  const { antCls, componentCls, proComponentsCls } = token;
  return {
    [`${componentCls}`]: {
      [`${proComponentsCls}-query-filter-actions`]: {
        // reverse position for button group and expand element
        [`${antCls}-space${antCls}-space-horizontal${antCls}-space-align-center`]: {
          flexDirection: 'row-reverse',
        },
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
