import { CaretRightFilled, LeftOutlined, RightOutlined } from '@oceanbase/icons';
import { setAlpha } from '@ant-design/pro-components';
import { token } from '@oceanbase/design';
import { isNullValue } from '@oceanbase/util';
import { ConfigProvider, Divider, Layout, Menu, Tooltip } from '@oceanbase/design';
import type { BadgeProps } from 'antd/es/badge';
import type { MenuProps } from 'antd/es/menu';
import classNames from 'classnames';
import { some } from 'lodash';
import { pathToRegexp } from 'path-to-regexp';
import React, { useContext, useEffect, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix, isEnglish, urlToList } from '../_util';
import useHistory from '../_util/useHistory';
import type { HeaderProps } from './Header';
import Header from './Header';
import zhCN from './locale/zh-CN';
import useStyle from './style';
import './index.less';

const { Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

export interface SiderHeaderProps {
  backUrl: string;
  /* 已废弃，属于命名错误的属性，为了兼容性先保留，推荐使用 backUrl */
  backupUrl?: string;
  backTitle: string;
  name: string;
  id: number;
  badgeProps?: BadgeProps;
}

export interface MenuItem {
  link: string;
  title: string;
  icon?: React.ReactNode;
  selectedIcon?: React.ReactNode;
  accessible?: boolean;
  divider?: boolean;
  children?: MenuItem[];
}

export interface BasicLayoutProps extends LocaleWrapperProps {
  location?: {
    pathname: string;
  };
  children?: React.ReactNode;
  /* 顶部公告 */
  banner?: React.ReactNode;
  /* 产品 icon，不带产品名 */
  iconUrl?: string;
  /* 产品 Logo，带产品名 */
  logoUrl: string;
  /* 产品简版 Logo，带产品名 */
  simpleLogoUrl?: string;
  className?: string;
  /* 顶部导航配置 */
  topHeader: HeaderProps;
  /* 侧边栏导航菜单 */
  menus: MenuItem[];
  /* 侧边栏导航是否默认收起 */
  defaultCollapsed?: boolean;
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  /* 侧边栏导航的 Header，可能是属性配置或者 ReactNode */
  sideHeader?: React.ReactNode;
  /* 子侧边栏导航菜单 */
  subSideMenus?: MenuItem[];
  /* 子侧边栏Menu属性 */
  subSideMenuProps?: MenuProps;
  style?: React.CSSProperties;
}

const prefix = getPrefix('layout');

const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  location: { pathname } = {},
  banner,
  iconUrl,
  logoUrl,
  simpleLogoUrl,
  topHeader,
  menus = [],
  defaultCollapsed = false,
  defaultSelectedKeys = [],
  defaultOpenKeys = [],
  sideHeader,
  subSideMenuProps,
  subSideMenus,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('basic-layout', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const basicLayoutCls = classNames(className, hashId);

  const history = useHistory();
  // 侧边栏导航是否收起
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [selectedKeys, setSelectedKeys] = useState(defaultSelectedKeys);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  useEffect(() => {
    // 获取当前选中的菜单
    const selectedMenuKeys =
      urlToList(pathname).map(itemPath => getMenuMatches(getFlatMenuKeys(menus), itemPath).pop()) ||
      [];
    const newSelectedKeys: string[] = selectedMenuKeys.filter(item => item);
    if (newSelectedKeys.length > 0) {
      setSelectedKeys([newSelectedKeys[newSelectedKeys.length - 1]]);
    } else {
      setSelectedKeys([]);
    }
  }, [pathname]);

  const menuProps = {
    selectedKeys,
    openKeys,
    onSelect: (({ selectedKeys: newSelectedKeys }) => {
      setSelectedKeys(newSelectedKeys);
    }) as any,
    onOpenChange: newOpenKeys => {
      // 最多只允许一个子菜单展开
      setOpenKeys(newOpenKeys);
    },
  };

  const getMenuMatches = (flatMenuKeys, path) => {
    return flatMenuKeys.filter(item => {
      return pathToRegexp(item).test(path);
    });
  };

  const getFlatMenuKeys = menuList => {
    let keys = [];
    (menuList || []).forEach(item => {
      if (item.children) {
        keys = keys.concat(getFlatMenuKeys(item.children));
      }
      keys.push(item.link || '');
    });
    return keys;
  };

  // 渲染菜单中的图标
  const renderIcon = (item: MenuItem, isSubSider = false) => {
    const realSelectedKeys = isSubSider
      ? subSideMenuProps.selectedKeys || subSideMenuProps.defaultSelectedKeys
      : selectedKeys;
    // 渲染 selectedIcon 的条件: 1. 菜单项被选中  2. 子菜单被选中
    return realSelectedKeys.includes(item.link) ||
      some(item.children || [], child => realSelectedKeys.includes(child.link))
      ? item.selectedIcon || item.icon
      : item.icon;
  };

  // 渲染菜单
  const renderMenu = (data: MenuItem[]) => {
    return data.reduce((pre, item) => {
      const { accessible = true } = item;
      if (
        item.children &&
        (isNullValue(item.accessible)
          ? // 如果子菜单本身没有设置 accessible，但只要其 children 之一可访问，则子菜单仍然展示
            item.children?.some(({ accessible: childAccessible = true }) => childAccessible)
          : item.accessible)
      ) {
        pre.push(
          <SubMenu
            data-testid="menu.sub"
            key={item.link}
            title={
              <Tooltip
                placement="right"
                title={item.title}
                // SubMenu 通常都会带 icon，因此这里判断英文环境下如果标题字符长度 > 15 就支持 tooltip 展示
                {...(isEnglish() && item.title && item.title.length > 15
                  ? {}
                  : {
                      visible: false,
                      // Support for antd 5.0
                      open: false,
                    })}
                getPopupContainer={() => document.body}
              >
                <span>
                  {renderIcon(item)}
                  <span>{item.title}</span>
                </span>
              </Tooltip>
            }
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      } else if (!item.children && accessible) {
        pre.push(
          <Item
            data-testid="menu.item"
            key={item.link}
            onClick={() => {
              if (pathname !== item.link) {
                history.push(item.link);
              }
            }}
          >
            <Tooltip
              placement="right"
              title={item.title}
              // 对于 Menu.Item，英文环境下如果标题字符长度 > 20 就支持 tooltip 展示
              {...(isEnglish() && item.title && item.title.length > 20
                ? {}
                : {
                    visible: false,
                    // Support for antd 5.0
                    open: false,
                  })}
              getPopupContainer={() => document.body}
            >
              <span>
                {renderIcon(item)}
                <span>{item.title}</span>
              </span>
            </Tooltip>
          </Item>
        );
      }
      if (item.divider && accessible) {
        pre.push(
          <Divider
            style={{
              // 渐变的分隔线
              borderImage: `linear-gradient(90deg, ${token.colorTextQuaternary} 0%, ${setAlpha(
                token.colorTextQuaternary,
                0
              )} 100%) 1`,
            }}
          />
        );
      }
      return pre;
    }, []);
  };

  // 渲染收起菜单
  const renderCollapsedMenu = (data: MenuItem[], isSubSider = false) => {
    return data.reduce((pre, item) => {
      const { accessible = true } = item;
      if (
        item.children &&
        (isNullValue(item.accessible)
          ? // 如果子菜单本身没有设置 accessible，但只要其 children 之一可访问，则子菜单仍然展示
            item.children?.some(({ accessible: childAccessible = true }) => childAccessible)
          : item.accessible)
      ) {
        pre.push(
          <SubMenu key={item.link} title={renderIcon(item, isSubSider)}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      } else if (!item.children && accessible) {
        pre.push(
          <Item
            data-testid="menu.item"
            key={item.link}
            onClick={() => {
              if (pathname !== item.link) {
                history.push(item.link);
              }
            }}
          >
            <Tooltip placement="right" title={item.title} getPopupContainer={() => document.body}>
              {/* 需要用 div 标签包裹，这样 Tooltip 的位置才会紧贴菜单，而不是 icon */}
              <div>{renderIcon(item, isSubSider)}</div>
            </Tooltip>
          </Item>
        );
      }
      if (item.divider && accessible) {
        pre.push(<Divider />);
      }
      return pre;
    }, []);
  };

  let siderWidth = 0;
  // 根据菜单项的配置计算侧边栏的宽度
  if (subSideMenus && menus) {
    siderWidth = collapsed ? 104 : 192;
  } else if (subSideMenus && !menus) {
    siderWidth = 52;
  } else if (!subSideMenus && menus) {
    siderWidth = collapsed ? 52 : 192;
  } else if (!subSideMenus && !menus) {
    siderWidth = 0;
  }

  return wrapSSR(
    <>
      {banner && <div className={`${prefix}-banner-wrapper`}>{banner}</div>}
      <Layout
        className={classNames(prefix, className, basicLayoutCls, {
          [`${prefix}-with-banner`]: banner,
        })}
        {...restProps}
      >
        <React.Fragment>
          <Header
            pathname={pathname}
            iconUrl={iconUrl}
            logoUrl={logoUrl}
            simpleLogoUrl={simpleLogoUrl}
            {...topHeader}
          />
          {/* content-layout 外需要用 div 包裹，否则内容区的宽度会不固定 */}
          <div>
            <Layout
              className={`${prefix}-content-layout`}
              style={{
                marginTop: 48,
              }}
            >
              {(subSideMenus || menus) && (
                <Sider
                  theme="light"
                  width={siderWidth}
                  className={classNames(`${prefix}-sider`, {
                    [`${prefix}-sider-collapsed`]: collapsed,
                    [`${prefix}-sider-has-sub-sider`]: subSideMenus,
                  })}
                >
                  <div className={`${prefix}-sider-wrapper`}>
                    {/* 子侧边栏菜单 */}
                    {subSideMenus && (
                      <div className={`${prefix}-sub-sider`}>
                        <Menu
                          {...subSideMenuProps}
                          mode="vertical"
                          className={`${prefix}-menu-vertical`}
                        >
                          {renderCollapsedMenu(subSideMenus, true)}
                        </Menu>
                      </div>
                    )}
                    {/* 侧边栏 */}
                    {(sideHeader || menus) && (
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                        }}
                      >
                        <div className={`${prefix}-sider-content`}>
                          {/* 侧边栏顶部内容 */}
                          {sideHeader && (
                            <div className={`${prefix}-sider-header`}>{sideHeader}</div>
                          )}
                          {/* 侧边栏菜单 */}
                          <div className={`${prefix}-menu-wrapper`}>
                            {collapsed ? (
                              <div className={`${prefix}-menu-collapsed`}>
                                <Menu
                                  {...menuProps}
                                  mode="vertical"
                                  className={`${prefix}-menu-vertical`}
                                >
                                  {renderCollapsedMenu(menus, false)}
                                </Menu>
                              </div>
                            ) : (
                              <Menu
                                {...menuProps}
                                mode="inline"
                                expandIcon={({ isOpen }) => {
                                  return (
                                    <CaretRightFilled
                                      rotate={isOpen ? 90 : 0}
                                      style={{
                                        fontSize: 12,
                                      }}
                                    />
                                  );
                                }}
                                className={`${prefix}-menu`}
                              >
                                {renderMenu(menus)}
                              </Menu>
                            )}
                          </div>
                        </div>
                        <div className={`${prefix}-sider-border`}>
                          <div
                            className={`${prefix}-sider-collapse`}
                            onClick={() => {
                              setCollapsed(!collapsed);
                              // 导航展开/收起时，重置 openKeys
                              setOpenKeys([]);
                            }}
                          >
                            {collapsed ? <RightOutlined /> : <LeftOutlined />}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Sider>
              )}
              <Content
                className={classNames(`${prefix}-content`, `${prefix}-content-${siderWidth}`)}
                style={{
                  marginLeft: siderWidth,
                }}
              >
                {children}
              </Content>
            </Layout>
          </div>
        </React.Fragment>
      </Layout>
    </>
  );
};

export default LocaleWrapper({
  componentName: 'BasicLayout',
  defaultLocale: zhCN,
})(BasicLayout);
