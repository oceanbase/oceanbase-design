import React from 'react';
import { useStyleRegister } from '@ant-design/cssinjs';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import themeConfig from '../theme';
import type { GlobalToken } from '../theme/interface';
import interFont from '../fonts/Inter.woff2';
import consolasFont from '../fonts/Consolas.woff2';
import helveticaNeueFont from '../fonts/HelveticaNeue.woff2';
import 'antd/dist/reset.css';

const genGlobalStyle = (token: GlobalToken): CSSInterpolation => {
  return [
    // Priority: local font > self-hosting font > remote font
    {
      '@font-face': {
        fontFamily: "'Inter'",
        src: `local('Inter'), url(${interFont}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*2aG4RJIdUGYAAAAAAAAAAAAADmfOAQ/Inter.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: "'Consolas'",
        src: `local('Consolas'), url(${consolasFont}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*R8bMTqAdGWgAAAAAAAAAAAAADmfOAQ/Consolas.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: "'Helvetica Neue'",
        src: `local('Helvetica Neue'), url(${helveticaNeueFont}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*3EzqR6aYJMkAAAAAAAAAAAAADmfOAQ/HelveticaNeue.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    // Global element styles
    {
      'pre, code, kbd, samp': {
        fontFamily: token.fontFamilyCode,
      },
      '*': {
        scrollbarColor: `${token.colorFillSecondary} transparent`,
      },
      '.rc-virtual-list-scrollbar-thumb': {
        background: `${token.colorFillSecondary} !important`,
      },
    },
  ];
};

const GlobalStyle: React.FC = () => {
  const { theme, token } = themeConfig.useToken();

  const wrapSSR = useStyleRegister(
    {
      theme,
      token,
      path: ['global'],
      hashId: '', // Empty hashId for global styles
      order: -1000, // Inject before other styles
    },
    () => genGlobalStyle(token)
  );

  return wrapSSR(<></>);
};

export { GlobalStyle };
export default GlobalStyle;
