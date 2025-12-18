import React from 'react';
import { useStyleRegister } from '@ant-design/cssinjs';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import themeConfig from '../theme';
import type { GlobalToken } from '../theme/interface';
import interRegular from '../fonts/Inter-Regular.woff2';
import interMedium from '../fonts/Inter-Medium.woff2';
import interSemibold from '../fonts/Inter-SemiBold.woff2';
import consolas from '../fonts/Consolas.woff2';
import helveticaNeue from '../fonts/HelveticaNeue.woff2';
import 'antd/dist/reset.css';

const genGlobalStyle = (token: GlobalToken, prefixCls?: string): CSSInterpolation => {
  const antCls = `.${prefixCls}`;
  const buttonComponentCls = `${antCls}-btn`;
  const typographyComponentCls = `${antCls}-typography`;
  const menuComponentCls = `${antCls}-menu`;
  return [
    {
      '@font-face': {
        fontFamily: 'Inter',
        fontStyle: 'lighter',
        fontWeight: 300,
        // load priority: local font > self-hosting font > remote font
        src: `local('Inter'), url(${interRegular}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*ucHoQ4exBNYAAAAARtAAAAgAemfOAQ/Inter-Regular.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        src: `local('Inter'), url(${interMedium}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*GboAQ56sQbkAAAAARwAAAAgAemfOAQ/Inter-Medium.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: 'Inter',
        fontStyle: 'medium',
        fontWeight: 500,
        src: `local('Inter'), url(${interMedium}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*GboAQ56sQbkAAAAARwAAAAgAemfOAQ/Inter-Medium.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: 'Inter',
        fontStyle: 'semibold',
        fontWeight: 600,
        src: `local('Inter'), url(${interSemibold}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*tcOIT5gLQl4AAAAARwAAAAgAemfOAQ/Inter-SemiBold.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: 'Consolas',
        src: `local('Consolas'), url(${consolas}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*R8bMTqAdGWgAAAAAAAAAAAAADmfOAQ/Consolas.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      '@font-face': {
        fontFamily: 'Helvetica Neue',
        src: `local('Helvetica Neue'), url(${helveticaNeue}) format('woff2'), url('https://mdn.alipayobjects.com/huamei_fhnyvh/afts/file/A*3EzqR6aYJMkAAAAAAAAAAAAADmfOAQ/HelveticaNeue.woff2') format('woff2')`,
        fontDisplay: 'swap',
      },
    },
    {
      'pre, code, kbd, samp': {
        fontFamily: token.fontFamilyCode,
      },
      'input::placeholder': {
        // affact all placeholder excluding select
        fontWeight: token.fontWeightWeak,
      },
      '*': {
        scrollbarColor: `${token.colorFillSecondary} transparent`,
      },
      '.rc-virtual-list-scrollbar-thumb': {
        background: `${token.colorFillSecondary} !important`,
      },
      // handle font-size: 12px font weight
      [`[style*='font-size: 12px']`]: {
        fontWeight: token.fontWeightWeak,
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
          [`${menuComponentCls}-title-content`]: {
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
