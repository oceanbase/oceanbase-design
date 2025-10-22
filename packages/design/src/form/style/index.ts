import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type FormToken = FullToken<'Form'>;

export const genFormStyle: GenerateStyle<FormToken> = (token: FormToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}${componentCls}-vertical`]: {
      [`${componentCls}-item:not(${componentCls}-item-horizontal)`]: {
        [`${componentCls}-item-label > label`]: {
          width: '100%',
          [`${componentCls}-item-action`]: {
            position: 'absolute',
            right: 0,
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Form', token => {
    return [genFormStyle(token as FormToken)];
  });
  return useStyle(prefixCls);
};
