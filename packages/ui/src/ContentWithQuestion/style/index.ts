import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ContentWithQuestionToken = FullToken<'App'>;

export const genContentWithQuestionStyle: GenerateStyle<any> = (
  token: ContentWithQuestionToken
): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}-item`]: {
      display: 'inline-flex',
      alignItems: 'center',
      [`${componentCls}-prefix`]: {
        marginRight: token.marginXS,
      },
      [`${componentCls}-suffix`]: {
        marginLeft: token.marginXS,
      },
      [`${componentCls}-help`]: {
        cursor: 'help',
        color: token.colorIcon,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ContentWithQuestion', token => {
    return [genContentWithQuestionStyle(token as ContentWithQuestionToken)];
  });
  return useStyle(prefixCls);
};
