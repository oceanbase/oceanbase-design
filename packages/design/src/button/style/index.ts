import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type ButtonToken = FullToken<'Button'>;

export const genButtonStyle: GenerateStyle<ButtonToken> = (token: ButtonToken) => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      // remove box-shadow for button
      boxShadow: 'none !important',
    },
  };
};

export default genStyleHooks('Button', token => {
  return [genButtonStyle(token as ButtonToken)];
});
