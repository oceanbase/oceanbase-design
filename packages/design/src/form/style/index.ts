import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type FormToken = FullToken<'Form'>;

export const genFormStyle: GenerateStyle<FormToken> = (token: FormToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-item`]: {
        [`${componentCls}-item-extra`]: {
          marginTop: token.marginXXS,
        },
        [`${componentCls}-item-explain + ${componentCls}-item-extra`]: {
          marginTop: 0,
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
