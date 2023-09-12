import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DescriptionsToken = FullToken<'Alert'> & {
  typographyPrefixCls: string;
  typographyComponentCls: string;
};

export const genDescriptionsStyle: GenerateStyle<DescriptionsToken> = (
  token: DescriptionsToken
): CSSObject => {
  const { componentCls, typographyComponentCls } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-item-container`]: {
        [`${componentCls}-item-content`]: {
          paddingRight: 12,
          // 为了保证内部的 Text ellipsis 生效
          overflow: 'hidden',
          [`${typographyComponentCls}-edit-content`]: {
            insetInlineStart: 0,
            marginTop: 0,
          },
        },
      },
    },
  };
};

export default (prefixCls: string, typographyPrefixCls: string) => {
  const useStyle = genComponentStyleHook('Descriptions', token => {
    return [
      genDescriptionsStyle({
        ...token,
        typographyPrefixCls,
        typographyComponentCls: `.${typographyPrefixCls}`,
      } as DescriptionsToken),
    ];
  });
  return useStyle(prefixCls);
};
