import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { FullToken, DerivativeToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook as antGenComponentStyleHook } from 'antd/es/theme/internal';
import type { GlobalToken } from 'antd/es/theme/interface';
import type { OverrideTokenWithoutDerivative } from 'antd/es/theme/util/genComponentStyleHook';
import HelveticaNeueWOFF from './fonts/HelveticaNeue-Regular.woff';
import HelveticaNeueWOFF2 from './fonts/HelveticaNeue-Regular.woff2';
import HelveticaNeueTTF from './fonts/HelveticaNeue-Regular.ttf';
import SourceSansProWOFF from './fonts/SourceSansPro-Regular.woff';
import SourceSansProWOFF2 from './fonts/SourceSansPro-Regular.woff2';
import SourceSansProTTF from './fonts/SourceSansPro-Regular.ttf';
import PingFangSCWOFF from './fonts/PingFangSC-Regular.woff';
import PingFangSCWOFF2 from './fonts/PingFangSC-Regular.woff2';
import PingFangSCTTF from './fonts/PingFangSC-Regular.ttf';
import MenloWOFF from './fonts/Menlo-Regular.woff';
import MenloWOFF2 from './fonts/Menlo-Regular.woff2';
import MenloTTF from './fonts/Menlo-Regular.ttf';

export type ComponentName = keyof ComponentTokenMap;

export const genGlobalStyle = (token: DerivativeToken, componentPrefixCls: string): CSSObject[] => {
  return [
    {
      // Number Font
      ['@font-face']: {
        fontFamily: 'Helvetica Neue For Number',
        // ref: https://segmentfault.com/a/1190000006814131#item-0-5
        // Priority order: system font > file font
        src: `local("Helvetica Neue"), url(${HelveticaNeueWOFF2}) format("woff2"), url(${HelveticaNeueWOFF}) format("woff"), url(${HelveticaNeueTTF}) format("truetype")`,
        // only work for number
        // ref: https://www.fileformat.info/info/unicode/category/Nd/list.htm
        unicodeRange: 'U+30-39',
      },
    },
    {
      // English Font
      ['@font-face']: {
        fontFamily: 'Source Sans Pro',
        src: `local("Source Sans Pro"), url(${SourceSansProWOFF2}) format("woff2"), url(${SourceSansProWOFF}) format("woff"), url(${SourceSansProTTF}) format("truetype")`,
      },
    },
    {
      // Chinese Font
      ['@font-face']: {
        fontFamily: 'PingFang SC',
        src: `local("PingFang SC"), url(${PingFangSCWOFF2}) format("woff2"), url(${PingFangSCWOFF}) format("woff"), url(${PingFangSCTTF}) format("truetype")`,
      },
    },
    {
      // Code Font
      ['@font-face']: {
        fontFamily: 'Menlo',
        src: `local("Menlo"), url(${MenloWOFF2}) format("woff2"), url(${MenloWOFF}) format("woff"), url(${MenloTTF}) format("truetype")`,
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
    const useStyle = antGenComponentStyleHook(
      `OB-${componentName}` as ComponentName,
      token => {
        return [genGlobalStyle(token, prefixCls), styleFn(token)];
      },
      getDefaultToken
    );
    const [wrapSSR, hashId] = useStyle(prefixCls);
    return {
      wrapSSR,
      hashId,
    };
  };
}

export type { CSSObject, FullToken, GenerateStyle };
