import { GithubOutlined, MenuOutlined } from '@oceanbase/icons';
import { ClassNames, css } from '@emotion/react';
import { Col, Popover, Row } from '@oceanbase/design';
import classNames from 'classnames';
import { history, useLocation, useLocale as useDumiLocale, useSiteData } from 'dumi';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import useSiteToken from '../../../hooks/useSiteToken';
import DirectionIcon from '../../common/DirectionIcon';
import * as utils from '../../utils';
import { setStoredLocale, toLocalizedPath } from '../../locale-preference';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import Logo from './Logo';
import More from './More';
import Navigation from './Navigation';
import SwitchBtn from './SwitchBtn';
import type { SharedProps } from './interface';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

const useStyle = () => {
  const { token } = useSiteToken();
  const searchIconColor = '#ced4d9';

  return {
    header: css`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowTertiary};

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${searchIconColor};
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `,
    dataDirectionIcon: css`
      width: 16px;
    `,
    popoverMenu: {
      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
        [`${token.antCls}-menu-item`]: {
          paddingInlineStart: '16px !important',
        },
      },
    },
  };
};

interface HeaderState {
  menuVisible: boolean;
  windowWidth: number;
  searching: boolean;
}

// ================================= Header =================================
const Header: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  const { pkg } = useSiteData();

  const [headerState, setHeaderState] = useState<HeaderState>({
    menuVisible: false,
    windowWidth: 1400,
    searching: false,
  });
  const { direction, isMobile, locale, updateSiteConfig } =
    useContext<SiteContextProps>(SiteContext);
  const location = useLocation();
  const { pathname, search } = location;

  const style = useStyle();

  const handleHideMenu = useCallback(() => {
    setHeaderState(prev => ({ ...prev, menuVisible: false }));
  }, []);
  const onWindowResize = useCallback(() => {
    setHeaderState(prev => ({ ...prev, windowWidth: window.innerWidth }));
  }, []);
  const handleShowMenu = useCallback(() => {
    setHeaderState(prev => ({ ...prev, menuVisible: true }));
  }, []);
  const onMenuVisibleChange = useCallback((visible: boolean) => {
    setHeaderState(prev => ({ ...prev, menuVisible: visible }));
  }, []);
  const onDirectionChange = () => {
    updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  };

  useEffect(() => {
    handleHideMenu();
  }, [location]);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
  }, []);

  // eslint-disable-next-line class-methods-use-this
  const handleVersionChange = useCallback((url: string) => {
    const currentUrl = window.location.href;
    const currentPathname = window.location.pathname;
    if (/overview/.test(currentPathname) && /0?[1-39][0-3]?x/.test(url)) {
      window.location.href = currentUrl
        .replace(window.location.origin, url)
        .replace(/\/components\/overview/, `/docs${/0(9|10)x/.test(url) ? '' : '/react'}/introduce`)
        .replace(/\/$/, '');
      return;
    }
    // Mirror url must have `/`, we add this for compatible
    const urlObj = new URL(currentUrl.replace(window.location.origin, url));
    if (urlObj.host.includes('antgroup')) {
      window.location.href = `${urlObj.href.replace(/\/$/, '')}/`;
    }
    window.location.href = urlObj.href.replace(/\/$/, '');
  }, []);

  const dumiLocale = useDumiLocale();
  const { locales: siteLocales } = useSiteData();

  const onLangChange = useCallback(() => {
    if (siteLocales && siteLocales.length > 1) {
      const targetLocale = siteLocales.find(l => l.id !== dumiLocale.id);
      if (targetLocale) {
        const stored = targetLocale.id === 'zh-CN' ? 'zh-CN' : 'en-US';
        history.push(toLocalizedPath(history.location.pathname, stored) + (search || ''));
        setStoredLocale(stored);
        return;
      }
    }
    // 单语言时回退到 query 参数方式
    const newLocale = locale === 'cn' ? 'en' : 'cn';
    updateSiteConfig({ locale: newLocale });
  }, [locale, updateSiteConfig, dumiLocale, siteLocales, search]);

  const nextDirectionText = useMemo<string>(
    () => (direction !== 'rtl' ? 'RTL' : 'LTR'),
    [direction]
  );

  const getDropdownStyle = useMemo<React.CSSProperties>(
    () => (direction === 'rtl' ? { direction: 'ltr', textAlign: 'right' } : {}),
    [direction]
  );

  const { menuVisible, windowWidth, searching } = headerState;

  const pathnameWithoutLocale = utils.getPathWithoutLocale(pathname);
  const isHome = ['', '/', 'index', 'index-cn'].includes(pathnameWithoutLocale);
  // 使用新的 locale 状态，而不是从 URL 路径判断
  const isZhCN = locale === 'cn';
  const isRTL = direction === 'rtl';
  let responsive: null | 'narrow' | 'crowded' = null;
  if (windowWidth < RESPONSIVE_XS) {
    responsive = 'crowded';
  } else if (windowWidth < RESPONSIVE_SM) {
    responsive = 'narrow';
  }

  const headerClassName = classNames({
    clearfix: true,
    'home-header': isHome,
  });

  const sharedProps: SharedProps = {
    isZhCN,
    isRTL,
    isClient,
  };

  const navigationNode = (
    <Navigation
      key="nav"
      {...sharedProps}
      responsive={responsive}
      isMobile={isMobile}
      directionText={nextDirectionText}
      onLangChange={onLangChange}
      onDirectionChange={onDirectionChange}
    />
  );

  let menu = [
    navigationNode,
    <More key="more" {...sharedProps} />,
    <SwitchBtn
      key="lang"
      onClick={onLangChange}
      value={locale === 'cn' ? 1 : 2}
      label1="中"
      label2="En"
      tooltip1="中文 / English"
      tooltip2="English / 中文"
    />,
    <SwitchBtn
      key="direction"
      onClick={onDirectionChange}
      value={direction === 'rtl' ? 2 : 1}
      label1={<DirectionIcon css={style.dataDirectionIcon} direction="ltr" />}
      tooltip1="LTR"
      label2={<DirectionIcon css={style.dataDirectionIcon} direction="rtl" />}
      tooltip2="RTL"
      pure
    />,
    <a
      key="github"
      href="https://github.com/oceanbase/oceanbase-design"
      target="_blank"
      rel="noreferrer"
    >
      <SwitchBtn value={1} label1={<GithubOutlined />} tooltip1="Github" label2={null} pure />
    </a>,
  ];

  if (windowWidth < RESPONSIVE_XS) {
    menu = searching ? [] : [navigationNode];
  } else if (windowWidth < RESPONSIVE_SM) {
    menu = searching ? [] : menu;
  }

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];

  return (
    <header css={style.header} className={headerClassName}>
      {isMobile && (
        <ClassNames>
          {({ css: cssFn }) => (
            <Popover
              overlayClassName={cssFn(style.popoverMenu)}
              placement="bottomRight"
              content={menu}
              trigger="click"
              open={menuVisible}
              arrow={{ arrowPointAtCenter: true }}
              onOpenChange={onMenuVisibleChange}
            >
              <MenuOutlined className="nav-phone-icon" onClick={handleShowMenu} />
            </Popover>
          )}
        </ClassNames>
      )}
      <Row style={{ flexFlow: 'nowrap', height: 64 }}>
        <Col {...colProps[0]}>
          <Logo {...sharedProps} location={location} />
        </Col>
        <Col {...colProps[1]} css={style.menuRow}>
          <div className="nav-search-wrapper">
            <DumiSearchBar />
          </div>
          {!isMobile && menu}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
