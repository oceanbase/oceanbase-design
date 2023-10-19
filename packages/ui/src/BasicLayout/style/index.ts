import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type BasicLayoutToken = FullToken<any>;

export const genBasicLayoutStyle: GenerateStyle<BasicLayoutToken> = (
  token: BasicLayoutToken
): CSSObject => {
  const { componentCls, proComponentsCls, motionDurationSlow } = token;
  const siderWidthList = [0, 52, 52 * 2, 192, 208];

  const footerBarStyle: CSSObject = {};
  siderWidthList.forEach(width => {
    footerBarStyle[`${componentCls}${componentCls}-sider-${width}`] = {
      [`${proComponentsCls}-footer-bar`]: {
        // footer bar width adapt to sider width of BasicLayout
        width: width === 0 ? '100%' : `calc(100% - ${width}px - 24px)`,
        transition: `width ${motionDurationSlow}`,
      },
    };
  });

  return {
    [`${componentCls}`]: {
      // Set style of PageContainer in BasicLayout
      [`${proComponentsCls}-page-container`]: {
        // 48px is the height of BasicLayout header
        minHeight: 'calc(100vh - 48px)',
      },
    },
    ...footerBarStyle,
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('BasicLayout', token => {
    return [genBasicLayoutStyle(token as BasicLayoutToken)];
  });
  return useStyle(prefixCls);
};
