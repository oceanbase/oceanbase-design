import * as React from 'react';
import { FormattedMessage, Link, useLocation } from 'dumi';
import * as utils from '../../utils';
import { Badge } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import { Menu } from '@oceanbase/design';
import { MenuOutlined } from '@oceanbase/icons';
import { css } from '@emotion/react';
import { getEcosystemGroup } from './More';
import type { SharedProps } from './interface';
import useSiteToken from '../../../hooks/useSiteToken';

// ============================= Style =============================
const useStyle = () => {
  const { token } = useSiteToken();

  const { antCls, iconCls, fontFamily, headerHeight, menuItemBorder, colorPrimary } = token;

  return {
    nav: css`
      height: 100%;
      line-height: 100%;
      font-size: 14px;
      font-family: Avenir, ${fontFamily}, sans-serif;
      border: 0;

      &${antCls}-menu-horizontal {
        border-bottom: none;

        & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
          min-width: ${40 + 12 * 2}px;
          height: ${headerHeight}px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: ${headerHeight}px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: ${menuItemBorder}px;
          }
        }

        & ${antCls}-menu-submenu-title ${iconCls} {
          margin: 0;
        }

        & > ${antCls}-menu-item-selected {
          a {
            color: ${colorPrimary};
          }
        }
      }

      & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
        text-align: center;
      }
    `,
    popoverMenuNav: css`
      ${antCls}-menu-item,
      ${antCls}-menu-submenu {
        text-align: left;
      }

      ${antCls}-menu-item-group-title {
        padding-left: 24px;
      }

      ${antCls}-menu-item-group-list {
        padding: 0 16px;
      }

      ${antCls}-menu-item,
      a {
        color: #333;
      }
    `,
  };
};

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  isClient: boolean;
  responsive: null | 'narrow' | 'crowded';
  directionText: string;
  onLangChange: () => void;
  onDirectionChange: () => void;
}

export default ({
  isZhCN,
  isClient,
  isMobile,
  responsive,
  directionText,
  onLangChange,
  onDirectionChange,
}: NavigationProps) => {
  const { pathname, search } = useLocation();

  const style = useStyle();

  const menuMode = isMobile ? 'inline' : 'horizontal';

  const pathnameWithoutLocale = utils.getPathWithoutLocale(pathname);
  const module = pathnameWithoutLocale
    .split('/')
    .filter(path => path)
    .slice(0, -1)
    .join('/');
  let activeMenuItem = module || 'home';
  if (pathnameWithoutLocale.startsWith('/changelog')) {
    activeMenuItem = 'docs';
  } else if (pathnameWithoutLocale.startsWith('/docs/react')) {
    activeMenuItem = 'docs';
  } else if (pathnameWithoutLocale.startsWith('/docs/resources')) {
    activeMenuItem = 'docs/resources';
  }

  let additional: MenuProps['items'];

  const additionalItems: MenuProps['items'] = [
    {
      label: (
        <a
          href="https://github.com/oceanbase/oceanbase-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      ),
      key: 'github',
    },
    {
      label: isZhCN ? 'English' : '中文',
      onClick: onLangChange,
      key: 'switch-lang',
    },
    {
      label: directionText,
      onClick: onDirectionChange,
      key: 'switch-direction',
    },
    ...getEcosystemGroup(),
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = [
      {
        label: <MenuOutlined />,
        key: 'additional',
        children: [...additionalItems],
      },
    ];
  }

  const navLinks = [
    { path: '/docs/spec/system-color', key: 'docs/spec', label: isZhCN ? '设计' : 'Design' },
    { path: '/docs/design-introduce', key: 'docs', label: isZhCN ? '研发' : 'Development' },
    { path: '/components/button', key: 'components', label: isZhCN ? '基础组件' : 'Components' },
    {
      path: '/biz-components/basic-layout',
      key: 'biz-components',
      label: isZhCN ? '业务组件' : 'Biz Components',
    },
    { path: '/charts/stat', key: 'charts', label: isZhCN ? '可视化图表' : 'Charts' },
    {
      path: '/docs/blog/chart-classification-palette-design-guide',
      key: 'docs/blog',
      label: isZhCN ? '博客' : 'Blog',
    },
  ];

  const items: MenuProps['items'] = [
    ...navLinks.map(({ path, key, label }) => ({
      label: <Link to={utils.getLocalizedPathname(path, isZhCN, search)}>{label}</Link>,
      key,
    })),
    ...(additional ?? []),
  ];

  return (
    <Menu
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      css={style.nav}
      disabledOverflow
      items={items}
      style={{ borderRight: 0 }}
    />
  );
};
