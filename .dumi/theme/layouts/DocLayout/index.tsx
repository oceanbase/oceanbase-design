import classNames from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Helmet, useOutlet, useSiteData } from 'dumi';
import React, { useContext, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import useLocale from '../../../hooks/useLocale';
import useLocation from '../../../hooks/useLocation';
import GlobalStyles from '../../common/GlobalStyles';
import Footer from '../../slots/Footer';
import Header from '../../slots/Header';
import SiteContext from '../../slots/SiteContext';
import '../../static/style';
import SidebarLayout from '../SidebarLayout';

const locales = {
  cn: {
    title: 'OceanBase Design - 基于 Ant Design 进行延展和二次开发的企业级设计系统',
    description: '基于 Ant Design 设计体系的 React UI 组件库，用于研发企业级中后台产品。',
  },
  en: {
    title:
      'OceanBase Design - An enterprise-class design system based on Ant Design and extending it',
    description:
      'An enterprise-class design system of helping OceanBase ecology and designers/developers building professional products',
  },
};

const DocLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const { pathname, search, hash } = location;
  const [locale, lang] = useLocale(locales);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { direction } = useContext(SiteContext);
  const { loading } = useSiteData();

  useLayoutEffect(() => {
    if (lang === 'cn') {
      dayjs.locale('zh-cn');
    } else {
      dayjs.locale('en');
    }
  }, []);

  useEffect(() => {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      timerRef.current = setTimeout(() => {
        nprogressHiddenStyle.parentNode?.removeChild(nprogressHiddenStyle);
      }, 0);
    }
  }, []);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) document.getElementById(decodeURIComponent(id))?.scrollIntoView();
  }, [loading, hash]);

  React.useEffect(() => {
    if (typeof (window as any).ga !== 'undefined') {
      (window as any).ga('send', 'pageview', pathname + search);
    }
    if (typeof (window as any)._hmt !== 'undefined') {
      (window as any)._hmt.push(['_trackPageview', pathname + search]);
    }
  }, [location]);

  const content = useMemo(() => {
    if (
      ['', '/'].some(path => path === pathname) ||
      ['/index'].some(path => pathname.startsWith(path))
    ) {
      return (
        <>
          {outlet}
          <Footer />
        </>
      );
    }
    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html
          lang={lang}
          data-direction={direction}
          className={classNames({ rtl: direction === 'rtl' })}
        />
        <title>{locale?.title}</title>
        <link
          sizes="144x144"
          href="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original"
        />
        <meta name="description" content={locale.description} />
        <meta property="og:title" content={locale?.title} />
        <meta property="og:description" content={locale.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original"
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      {content}
    </>
  );
};

export default DocLayout;
