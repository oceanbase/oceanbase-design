import { ConfigProvider, Menu } from '@oceanbase/design';
import { isArray } from 'lodash';
import { pathToRegexp } from 'path-to-regexp';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import useNavigate from '../_util/useNavigate';
import useStyle from './style';
import zhCN from './locale/zh-CN';

export interface NavMenuItem {
  key: string;
  title: string;
  link: string | string[];
  disabled?: boolean;
  openNewTab?: boolean; // 不在本应用内打开
  href?: boolean;
  id?: string;
  children?: NavMenuItem[];
}

export interface NavMenuProps extends LocaleWrapperProps {
  menuList: NavMenuItem[];
  className?: string;
  style?: React.CSSProperties;
  /** 覆盖 locale 中的导航 landmark 可访问名称 */
  navigationAriaLabel?: string;
}

const NavMenu = (props: NavMenuProps) => {
  const { menuList, className, style, navigationAriaLabel, locale } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('menu');
  const { wrapSSR } = useStyle(prefixCls);
  const [selectedKeys, setSelectedKeys] = useState(['0']);
  const [menus, setMenus] = useState([]);
  // Avoid SSR issue: only read window.location on client (e.g. Next.js)
  const [location, setLocation] = useState<{ pathname: string } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation({ pathname: window.location.pathname });
    }
  }, []);

  const navigate = useNavigate();

  const preProcess = useCallback(
    list => {
      const pathname = location?.pathname ?? '';
      try {
        for (let i = 0; i < list.length; i++) {
          const { link, openNewTab, href, key, children } = list[i];
          const linkList = isArray(link) ? link : [link];
          const match = linkList.some(lk =>
            // pathToRegexp 不支持 http/https 协议解析，需要去掉协议头
            pathToRegexp(lk.replace(/^https?:\/\//, '')).test(pathname)
          );
          if (match) {
            if (openNewTab || href) return false;
            setSelectedKeys([key]);
            setMenus(list);
            return;
          }
          if (!!children?.length) {
            preProcess(children);
          }
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [location]
  );

  useEffect(() => {
    preProcess(menuList);
  }, [menuList, preProcess]);

  const onMenuItemSelect = useCallback(
    payload => {
      const { selectedKeys: newSelectedKeys } = payload;
      // 打开新tab类型的不需要设置选中态
      if (menus.some(i => i.key === newSelectedKeys[0] && i.openNewTab)) return;
      setSelectedKeys(newSelectedKeys);
    },
    [setSelectedKeys, menus]
  );

  const onMenuClick = useCallback(
    link => {
      const linkList = isArray(link) ? link : [link];
      navigate?.(linkList[0]);
    },
    [navigate]
  );

  return wrapSSR(
    <div
      className={`${prefixCls}-container ${className || ''}`}
      style={style}
      role="navigation"
      aria-label={navigationAriaLabel ?? locale?.navigationLabel}
    >
      <Menu
        style={{ height: '100%', borderRight: 0 }}
        defaultSelectedKeys={['0']}
        selectedKeys={selectedKeys}
        onSelect={onMenuItemSelect}
        mode="inline"
        theme="light"
      >
        {menus.map(config => {
          return (
            <Menu.Item key={config.key} disabled={config.disabled ?? false}>
              {config.openNewTab ? (
                <a id={config.id} href={config.link} target="_blank" rel="noreferrer">
                  {config.title}
                </a>
              ) : (
                <a id={config.id} onClick={() => onMenuClick(config.link)}>
                  {config.title}
                </a>
              )}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'NavMenu',
  defaultLocale: zhCN,
})(NavMenu);
