import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { DerivativeToken, FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook as antGenComponentStyleHook } from 'antd/es/theme/internal';
import type { GlobalToken } from 'antd/es/theme/interface';
import type { OverrideTokenWithoutDerivative } from 'antd/es/theme/util/genComponentStyleHook';
import { useContext } from 'react';
import ConfigProvider from '../config-provider';
import theme from '../theme';

export type ComponentName = keyof ComponentTokenMap;

export const genCustomFontStyle = (token: DerivativeToken): CSSObject[] => {
  return [
    {
      ['@font-face']: {
        fontFamily: 'Source Sans Pro',
        // 定义三种字体格式，适配不同版本的浏览器，并且最多加载一种字体文件
        src: `url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*H1MFR42M5PMAAAAAAAAAAAAADmfOAQ/Source%20Sans%20Pro.woff2') format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*jbYLSpw_gfEAAAAAAAAAAAAADmfOAQ/Source%20Sans%20Pro.woff') format('woff'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*28ClS5qHwQ8AAAAAAAAAAAAADmfOAQ/Source%20Sans%20Pro.ttf') format('truetype')`,
        // 定义字体加载策略，外置字体加载前使用默认字体进行兜底
        fontDisplay: 'swap',
      },
    },
  ];
};

export function genComponentStyleHook(
  componentName: ComponentName,
  styleFn: GenerateStyle<FullToken<ComponentName>>,
  getDefaultToken?:
    | OverrideTokenWithoutDerivative[ComponentName]
    | ((token: GlobalToken) => OverrideTokenWithoutDerivative[ComponentName])
) {
  return (prefixCls: string) => {
    const { theme: themeConfig } = useContext(ConfigProvider.ConfigContext);
    const useStyle = antGenComponentStyleHook(
      `OB-${componentName}` as ComponentName,
      token => {
        return [themeConfig?.customFont ? genCustomFontStyle(token) : null, styleFn(token)];
      },
      getDefaultToken,
      {
        resetStyle: false,
        // antd style order is -999 and -998
        // ref: https://github.com/ant-design/ant-design/blob/master/components/theme/util/genComponentStyleHook.tsx#L175
        // obui style order should behind to cover it
        order: -900,
      }
    );
    const [wrapSSR] = useStyle(prefixCls);
    // use hashId from useToken, as hashId is '' when hashed is false
    // ref: https://github.com/ant-design/ant-design/blob/master/components/theme/useToken.ts#L80
    const { hashId } = theme.useToken();
    return {
      wrapSSR,
      hashId,
    };
  };
}

export type { CSSObject, FullToken, GenerateStyle };
