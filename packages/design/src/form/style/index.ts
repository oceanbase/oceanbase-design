import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type FormToken = FullToken<'Form'>;

export const genFormStyle: GenerateStyle<FormToken> = (token: FormToken): CSSObject => {
  const { componentCls, calc } = token;
  return {
    [componentCls]: {
      // extra style
      [`${componentCls}-item-explain, ${componentCls}-item-extra`]: {
        paddingTop: token.paddingXXS,
        fontSize: token.fontSizeSM,
      },
      [`${componentCls}-item-explain + ${componentCls}-item-extra`]: {
        paddingTop: 0,
      },
    },
    // vertical layout style
    [`${componentCls}${componentCls}-vertical`]: {
      [`${componentCls}-item:not(${componentCls}-item-horizontal)`]: {
        // description style
        [`${componentCls}-item-control-input`]: {
          minHeight: 'auto',
        },
        [`${componentCls}-item-label`]: {
          paddingBottom: calc(token.paddingXXS).add(2).equal(),
        },
        [`${componentCls}-item-description`]: {
          paddingTop: token.paddingXXS,
          fontSize: token.fontSizeSM,
          color: token.colorTextDescription,
        },
        // action style
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
