import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type ContentWithIconToken = OBToken;

export const genContentWithIconStyle: GenerateStyle<ContentWithIconToken> = (
  token: ContentWithIconToken
): CSSObject => {
  const { componentCls } = token;

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
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ContentWithIcon', token => {
    return [genContentWithIconStyle(token as ContentWithIconToken)];
  });
  return useStyle(prefixCls);
};

