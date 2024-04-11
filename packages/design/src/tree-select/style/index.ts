import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TreeSelectToken = FullToken<'TreeSelect'>;

export const genTreeSelectStyle: GenerateStyle<TreeSelectToken> = (
  token: TreeSelectToken
): CSSObject => {
  return {};
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('TreeSelect', (token: TreeSelectToken) => {
    return [genTreeSelectStyle(token)];
  });
  return useStyle(prefixCls);
};
