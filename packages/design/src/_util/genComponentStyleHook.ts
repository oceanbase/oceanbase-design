import React from 'react';
import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook as antGenComponentStyleHook } from 'antd/es/theme/internal';
import type { GlobalToken } from 'antd/es/theme/interface';
import theme from '../theme';
import Inter from './fonts/Inter.woff2';
import Consolas from './fonts/Consolas.woff2';
import HelveticaNeue from './fonts/HelveticaNeue.woff2';

export type ComponentName = keyof ComponentTokenMap;

export const genCustomFontStyle = (token: GlobalToken): CSSObject[] => {
  return [
    {
      // English font: work by default
      ['@font-face']: {
        fontFamily: 'Inter',
        // load priority: remote font > local font
        src: `url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*2aG4RJIdUGYAAAAAAAAAAAAADmfOAQ/Inter.woff2') format('woff2'), url(${Inter}) format('woff2')`,
        // 定义字体加载策略，外置字体加载前使用默认字体进行兜底
        fontDisplay: 'swap',
      },
    },
    {
      // Code font: work by default
      ['@font-face']: {
        fontFamily: 'Consolas',
        src: `url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*R8bMTqAdGWgAAAAAAAAAAAAADmfOAQ/Consolas.woff2') format('woff2'), url(${Consolas}) format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      // Number code: work manully by configuring font-family
      ['@font-face']: {
        fontFamily: 'Helvetica Neue',
        src: `url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*3EzqR6aYJMkAAAAAAAAAAAAADmfOAQ/HelveticaNeue.woff2') format('woff2'), url(${HelveticaNeue}) format('woff2')`,
        fontDisplay: 'swap',
      },
    },
  ];
};

export function genComponentStyleHook(
  componentName: ComponentName,
  styleFn: GenerateStyle<FullToken<ComponentName>>,
  getDefaultToken?:
    | Partial<FullToken<ComponentName>>
    | ((token: GlobalToken) => Partial<FullToken<ComponentName>>)
) {
  return (prefixCls: string) => {
    const useStyle = antGenComponentStyleHook(
      `OB-${componentName}` as ComponentName,
      token => {
        return [genCustomFontStyle(token), styleFn(token)];
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
