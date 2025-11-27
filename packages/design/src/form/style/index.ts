import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type FormToken = FullToken<'Form'>;

export const genFormStyle: GenerateStyle<FormToken> = (token: FormToken): CSSObject => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      [`${componentCls}-item-extra`]: {
        paddingTop: token.paddingXXS,
        fontSize: token.fontSizeSM,
      },
    },
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
      [`${componentCls}-item-has-description`]: {
        [`${componentCls}-item-control-input`]: {
          minHeight: 'auto',
        },
        [`${componentCls}-item-label`]: {
          paddingBottom: token.paddingXXS,
        },
        [`${componentCls}-item-description`]: {
          paddingBottom: token.paddingXXS + 2,
          fontSize: token.fontSizeSM,
          color: token.colorTextDescription,
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
