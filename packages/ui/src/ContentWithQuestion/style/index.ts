import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genContentWithQuestionStyle: GenerateStyle<any> = (token: any): CSSObject => {
  const { componentCls, paddingSM } = token;

  return {
    [`${componentCls}-item`]: {
      display: 'inline-flex',
      alignItems: 'center',
      [`${componentCls}-prefix`]: {
        marginRight: 8,
      },
      [`${componentCls}-suffix`]: {
        marginLeft: 8,
      },
      [`${componentCls}-help`]: {
        cursor: 'help',
      },
      [`${componentCls}-color`]: {
        color: 'red',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ContentWithQuestion', token => {
    return [genContentWithQuestionStyle(token as any)];
  });
  return useStyle(prefixCls);
};
