import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type BasicLayoutToken = FullToken<any>;

export const genBasicLayoutStyle: GenerateStyle<BasicLayoutToken> = (
  token: BasicLayoutToken
): CSSObject => {
  const { proComponentsCls } = token;

  return {
    // Set style of PageContainer in BasicLayout
    [`${proComponentsCls}-page-container`]: {
      // 48px is the height of BasicLayout header
      minHeight: 'calc(100vh - 48px)',
    },
    [`${proComponentsCls}-footer-bar`]: {
      width: `calc(100% - 192px - 24px)`,
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('BasicLayout', token => {
    return [genBasicLayoutStyle(token)];
  });
  return useStyle(prefixCls);
};
