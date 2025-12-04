import React from 'react';
import { useStyleRegister } from '@ant-design/cssinjs';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import themeConfig from '../theme';
import type { GlobalToken } from '../theme/interface';
import interFont from '../fonts/Inter.woff2';
import consolasFont from '../fonts/Consolas.woff2';
import helveticaNeueFont from '../fonts/HelveticaNeue.woff2';
import 'antd/dist/reset.css';

const genGlobalStyle = (token: GlobalToken, prefixCls?: string): CSSInterpolation => {
  const antCls = `.${prefixCls}`;
  const buttonComponentCls = `${antCls}-btn`;
  const typographyComponentCls = `${antCls}-typography`;
  const menuComponentCls = `${antCls}-menu`;
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
      // link with href or data-aspm-param^="obcloud_openLink= show underline on hover
      // except disabled and antd element
      'a[href], a[data-aspm-param^="obcloud_openLink="]': {
        [`&:not([disabled]):not([class^="${prefixCls}-"]):hover`]: {
          textDecoration: 'underline',
        },
      },
      // handle link style in button
      [`${buttonComponentCls}${buttonComponentCls}-link:not(${buttonComponentCls}-disabled)`]: {
        '&[href], &[data-aspm-param^="obcloud_openLink="]': {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
      // handle link style in typography
      [`${typographyComponentCls}:not(${typographyComponentCls}-disabled)`]: {
        '&[href], &[data-aspm-param^="obcloud_openLink="]': {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
      // handle link style in menu
      [`${menuComponentCls}`]: {
        [`${menuComponentCls}-item`]: {
          [`${antCls}-menu-title-content`]: {
            'a:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
    },
  ];
};

export interface GlobalStyleProps {
  prefixCls?: string;
}

const GlobalStyle: React.FC<GlobalStyleProps> = ({ prefixCls = 'ant' }) => {
  const { theme, token } = themeConfig.useToken();

  const wrapSSR = useStyleRegister(
    {
      theme,
      token,
      path: ['global'],
      hashId: '', // Empty hashId for global styles
      order: -1000, // Inject before other styles
    },
    () => genGlobalStyle(token, prefixCls)
  );

  return wrapSSR(<></>);
};

export { GlobalStyle };
export default GlobalStyle;
