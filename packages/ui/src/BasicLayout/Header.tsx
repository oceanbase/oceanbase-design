import {
  BulbFilled,
  BulbOutlined,
  CopyrightOutlined,
  ReadFilled,
  UserOutlined,
  UserFilled,
} from '@oceanbase/icons';
import { ConfigProvider, Button, Dropdown, Menu, Modal, Space, Tooltip } from '@oceanbase/design';
import classNames from 'classnames';
import moment from 'moment';
import React, { useState, useContext } from 'react';
import { OB_SITE_LINK } from '../constant';
import type { Locale } from '../interface';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { directTo } from '../_util';
import useNavigate from '../_util/useNavigate';
import zhCN from './locale/zh-CN';
// @ts-ignore
// 自定义 SVG 图标需要将其导入为图片，而不能是 ReactComponent，因为需要依赖 webpack 插件
// 虽然本地开发可以生效，但构建后的产物在上层项目中不会生效，导致 SVG 展示为空
import logoImg from '../assets/logo/oceanbase_logo.svg';
// @ts-ignore
import logoImgDark from '../assets/logo/oceanbase_logo_dark.svg';
import LocaleDropdown from '../LocaleDropdown';
import useStyle from './style/Header';

export type OverlayFunc = () => React.ReactElement;

export interface HeaderLocale {
  help: string;
  welcome: string;
  viewDocs: string;
  downloadDocs?: string;
  about: string;
  version: string;
  releaseTime: string;
  company: string;
  right: string;
}

export interface AppData {
  shortName?: string;
  version: string;
  releaseTime: string;
}

export interface HeaderProps extends LocaleWrapperProps {
  prefixCls?: string;
  // 单是否收起状态  菜单收起状态只展示：icon, 展开状态展示：icon 文字
  showLabel?: boolean;
  style?: React.CSSProperties;
  className?: string;
  title?: React.ReactNode;
  // header 右上角的操作区域
  extra?: React.ReactNode;
  pathname?: string;
  welcomePath?: string;
  docsPath?: string;
  pdfPath?: string;
  iconUrl?: string;
  logoUrl?: string;
  simpleLogoUrl?: string;
  username?: string;
  userMenu?: React.ReactElement | OverlayFunc;
  appData?: AppData;
  // 国际化文案对象
  locale?: HeaderLocale;
  // 是否展示帮助入口
  showHelp?: boolean;
  // 是否展示多语言切换入口
  showLocale?: boolean;
  // 自定义语言列表
  locales?: Locale[];
  // langs 用法同 locales，只不过是老版本 API，先内部兼容
  // 建议使用 locales 进行配置
  langs?: Locale[];
}

const Header: React.FC<HeaderProps> = ({
  prefixCls: customizePrefixCls,
  showLabel = true,
  title,
  extra,
  pathname,
  welcomePath,
  docsPath,
  pdfPath,
  iconUrl,
  logoUrl,
  simpleLogoUrl,
  username,
  userMenu,
  appData = {},
  locale = {},
  showHelp = true,
  // 是否展示国际化切换入口，默认为 false
  showLocale = false,
  locales,
  langs,
  ...restProps
}) => {
  const { theme, getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-basic-layout-header', `${customizePrefixCls}-header`);
  const { wrapSSR } = useStyle(prefixCls);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // 是否为欢迎页
  // 主要是为了处理与欢迎页搭配使用的场景
  const isWelcome = pathname === welcomePath;
  // 帮助菜单
  const helpMenu = (
    <Menu
      onClick={({ key }) => {
        if (key === 'welcome') {
          navigate?.(welcomePath);
        } else if (key === 'viewDocs') {
          directTo(docsPath);
        } else if (key === 'downloadDocs') {
          const ele = document.createElement('a');
          ele.setAttribute('href', pdfPath);
          ele.setAttribute('download', pdfPath?.split('/')?.pop() || 'Docs.pdf');
          ele.click();
          ele.remove();
        } else if (key === 'about') {
          setVisible(true);
        }
      }}
    >
      {welcomePath && <Menu.Item key="welcome">{locale.welcome}</Menu.Item>}
      {docsPath && <Menu.Item key="viewDocs">{locale.viewDocs}</Menu.Item>}
      {pdfPath && <Menu.Item key="downloadDocs">{locale.downloadDocs}</Menu.Item>}
      <Menu.Item key="about">{`${locale.about}${
        appData.shortName ? ` ${appData.shortName}` : ''
      }`}</Menu.Item>
    </Menu>
  );

  return wrapSSR(
    <div
      {...restProps}
      className={classNames(prefixCls, {
        [`${prefixCls}-welcome`]: isWelcome,
      })}
    >
      <div className={`${prefixCls}-content`}>
        <img
          src={simpleLogoUrl}
          alt=""
          onClick={() => {
            navigate?.('/');
          }}
          className={`${prefixCls}-logo`}
        />

        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {showLabel ? (
          <div className={`${prefixCls}-extra ${prefixCls}-extra-with-label`}>
            {extra}
            {showHelp && (
              <Dropdown overlay={helpMenu}>
                <Space className={`${prefixCls}-extra-item`}>
                  <BulbOutlined />
                  <span data-testid="help">{locale.help}</span>
                </Space>
              </Dropdown>
            )}

            {showLocale && (
              <LocaleDropdown locales={locales || langs} className={`${prefixCls}-extra-item`} />
            )}

            {userMenu ? (
              <Dropdown overlay={userMenu}>
                <Button shape="round" size="small">
                  <Space className={`${prefixCls}-extra-item`}>
                    <UserOutlined />
                    <span>{username}</span>
                  </Space>
                </Button>
              </Dropdown>
            ) : (
              // userMenu username 都不存在时，不展示该项
              <>
                {username ? (
                  <Button shape="round" size="small">
                    <Space className={`${prefixCls}-extra-item`}>
                      <UserOutlined />
                      <span>{username}</span>
                    </Space>
                  </Button>
                ) : null}
              </>
            )}
          </div>
        ) : (
          <div className={`${prefixCls}-extra`}>
            <span className={`${prefixCls}-extra-item`}>
              <Dropdown overlay={helpMenu}>
                <span className={`${prefixCls}-extra-icon-wrapper`}>
                  <BulbFilled />
                </span>
              </Dropdown>
            </span>
            {docsPath && (
              <Tooltip title={locale.viewDocs}>
                <span
                  className={`${prefixCls}-extra-item`}
                  onClick={() => {
                    directTo(docsPath);
                  }}
                >
                  <span className={`${prefixCls}-extra-icon-wrapper`}>
                    <ReadFilled />
                  </span>
                </span>
              </Tooltip>
            )}

            {showLocale && (
              <LocaleDropdown
                showLabel={true}
                locales={locales || langs}
                className={`${prefixCls}-extra-item`}
              />
            )}

            {userMenu ? (
              <span className={`${prefixCls}-extra-item`}>
                <Dropdown overlay={userMenu}>
                  <span className={`${prefixCls}-extra-user-wrapper`}>
                    <UserFilled className={`${prefixCls}-extra-user-icon`} />
                    <span className={`${prefixCls}-extra-username`}>{username}</span>
                  </span>
                </Dropdown>
              </span>
            ) : (
              <span className={`${prefixCls}-extra-item`}>
                <span className={`${prefixCls}-extra-user-wrapper`}>
                  <UserFilled className={`${prefixCls}-extra-user-icon`} />
                  <span>{username}</span>
                </span>
              </span>
            )}
          </div>
        )}
      </div>
      <Modal
        visible={visible}
        // Support for antd 5.0
        open={visible}
        destroyOnClose={true}
        footer={false}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div className={`${prefixCls}-about-wrapper`}>
          <div className={`${prefixCls}-about`}>
            <img src={logoUrl} alt="" className={`${prefixCls}-logo`} />
            <div className={`${prefixCls}-release-info`}>
              <div className={`${prefixCls}-version`}>
                {locale.version}: {appData.version}
              </div>
              {appData.releaseTime && (
                <div className={`${prefixCls}-date`}>
                  {`${locale.releaseTime}: ${appData.releaseTime}`}
                </div>
              )}
            </div>
            <div>
              <div>
                <a href={OB_SITE_LINK} target="_blank" rel="noopener noreferrer">
                  {OB_SITE_LINK}
                </a>
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span className={`${prefixCls}-copyright`}>
                  {locale.right} <CopyrightOutlined /> {moment().year()} {locale.company}
                </span>
                <img src={theme?.isDark ? logoImgDark : logoImg} alt="" style={{ height: 12 }} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'BasicLayout',
  defaultLocale: zhCN,
})(Header);
