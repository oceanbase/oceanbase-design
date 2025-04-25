import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type SelectToken = FullToken<'Select'>;

export const genSelectStyle: GenerateStyle<SelectToken> = (token: SelectToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {},
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Select', token => {
    return [genSelectStyle(token as SelectToken)];
  });
  return useStyle(prefixCls);
};
