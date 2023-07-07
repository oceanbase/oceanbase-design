import {
  BulbFilled,
  BulbOutlined,
  CopyrightOutlined,
  ReadFilled,
  UserOutlined,
} from '@oceanbase/icons';
import { Button, Dropdown, Menu, Modal, Space, Tooltip } from '@oceanbase/design';
import classNames from 'classnames';
import moment from 'moment';
import React, { useState } from 'react';
import { OB_SITE_LINK } from '../constant';
import type { Locale } from '../interface';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import { directTo, getPrefix } from '../_util';
import useHistory from '../_util/useHistory';
import zhCN from './locale/zh-CN';
// @ts-ignore
import logoImg from '../assets/logo/oceanbase_logo.svg';
// @ts-ignore
// 自定义 SVG 图标需要将其导入为图片，而不能是 ReactComponent，因为需要依赖 webpack 插件
// 虽然本地开发可以生效，但构建后的产物在上层项目中不会生效，导致 SVG 展示为空
import UserSvg from '../assets/user.svg';
import LocaleDropdown from '../LocaleDropdown';
import './Header.less';

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

const prefix = getPrefix('layout-header');

const Header: React.FC<HeaderProps> = ({
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
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  // 是否为欢迎页
  // 主要是为了处理与欢迎页搭配使用的场景
  const isWelcome = pathname === welcomePath;
  // 帮助菜单
  const helpMenu = (
    <Menu
      onClick={({ key }) => {
        if (key === 'welcome') {
          history.push(welcomePath);
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
      {pdfPath && <Menu.Item key="downloadDocs">{locale.downloadDocs}</Menu.Item>}
      <Menu.Item key="about">{`${locale.about}${
        appData.shortName ? ` ${appData.shortName}` : ''
      }`}</Menu.Item>
    </Menu>
  );

  return (
    <div
      {...restProps}
      className={classNames(`${prefix}`, {
        [`${prefix}-welcome`]: isWelcome,
      })}
    >
      <div className={`${prefix}-content`}>
        <img
          src={simpleLogoUrl}
          alt=""
          onClick={() => {
            history.push('/');
          }}
          className={`${prefix}-logo`}
        />
        {title && <div className={`${prefix}-title`}>{title}</div>}
        {showLabel ? (
          <div className={`${prefix}-extra ${prefix}-extra-with-label`}>
            {extra}
            {showHelp && (
              <Dropdown overlay={helpMenu}>
                <Space className={`${prefix}-extra-item`}>
                  <BulbOutlined />
                  <span data-testid="help">{locale.help}</span>
                </Space>
              </Dropdown>
            )}
            {showLocale && (
              <span className={`${prefix}-extra-item`}>
                <LocaleDropdown locales={locales || langs} />
              </span>
            )}
            {userMenu ? (
              <Dropdown overlay={userMenu}>
                <Button shape="round" size="small">
                  <Space className={`${prefix}-extra-item`}>
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
                    <Space className={`${prefix}-extra-item`}>
                      <UserOutlined />
                      <span>{username}</span>
                    </Space>
                  </Button>
                ) : null}
              </>
            )}
          </div>
        ) : (
          <div className={`${prefix}-extra`}>
            <span className={`${prefix}-extra-item`}>
              <Dropdown overlay={helpMenu}>
                <span className={`${prefix}-extra-icon-wrapper`}>
                  <BulbFilled />
                </span>
              </Dropdown>
            </span>
            {docsPath && (
              <Tooltip title={locale.viewDocs}>
                <span
                  className={`${prefix}-extra-item`}
                  onClick={() => {
                    directTo(docsPath);
                  }}
                >
                  <span className={`${prefix}-extra-icon-wrapper`}>
                    <ReadFilled />
                  </span>
                </span>
              </Tooltip>
            )}
            {showLocale && (
              <span className={`${prefix}-extra-item`}>
                <LocaleDropdown showLabel={true} locales={locales || langs} />
              </span>
            )}
            {userMenu ? (
              <span className={`${prefix}-extra-item`}>
                <Dropdown overlay={userMenu}>
                  <span className={`${prefix}-extra-user-wrapper`}>
                    <img
                      src={UserSvg}
                      alt=""
                      className={`${prefix}-extra-user-icon`}
                      style={{ height: 12 }}
                    />
                    <span className={`${prefix}-extra-username`}>{username}</span>
                  </span>
                </Dropdown>
              </span>
            ) : (
              <span className={`${prefix}-extra-item`}>
                <span className={`${prefix}-extra-user-wrapper`}>
                  <img
                    src={UserSvg}
                    alt=""
                    className={`${prefix}-extra-user-icon`}
                    style={{ height: 12 }}
                  />
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
        <div className={`${prefix}-about-wrapper`}>
          <div className={`${prefix}-about`}>
            <img src={logoUrl} alt="" className={`${prefix}-logo`} />
            <div className={`${prefix}-release-info`}>
              <div className={`${prefix}-version`}>
                {locale.version}: {appData.version}
              </div>
              {appData.releaseTime && (
                <div
                  className={`${prefix}-date`}
                >{`${locale.releaseTime}: ${appData.releaseTime}`}</div>
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
                <span className={`${prefix}-copyright`}>
                  {locale.right} <CopyrightOutlined /> {moment().year()} {locale.company}
                </span>
                <img src={logoImg} alt="" style={{ height: 12 }} />
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
