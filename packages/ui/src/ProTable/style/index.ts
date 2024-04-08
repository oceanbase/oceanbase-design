import type { CSSObject } from '@ant-design/cssinjs';
import { Table } from '@oceanbase/design';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genProTableStyle: GenerateStyle<OBToken> = (token: OBToken): CSSObject => {
  return {};
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ProTable', token => {
    return [
      Table.genTableStyle({
        ...token,
        componentCls: `${token.antCls}-table`,
      } as any),
      genProTableStyle(token as OBToken),
    ];
  });
  return useStyle(prefixCls);
};
