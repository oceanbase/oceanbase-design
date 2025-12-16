import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type TreeSelectToken = FullToken<'TreeSelect'>;

export const genTreeSelectStyle: GenerateStyle<TreeSelectToken> = (
  token: TreeSelectToken
): CSSObject => {
  return {};
};

export default genStyleHooks('TreeSelect', token => {
  return [genTreeSelectStyle(token as TreeSelectToken)];
});
