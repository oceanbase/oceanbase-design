import { css } from '@emotion/react';
import { Col, ConfigProvider, Drawer, FloatButton, Menu } from '@oceanbase/design';
import { useSidebarData } from 'dumi';
import React, { useContext, useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import useSiteToken from '../../../hooks/useSiteToken';
import SiteContext from '../SiteContext';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const useStyle = () => {
  const { token } = useSiteToken();
  const { antCls, fontFamily, colorSplit } = token;

  return {
    asideContainer: css`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, ${fontFamily}, sans-serif;

      &${antCls}-menu-inline {
        ${antCls}-menu-submenu-title h4,
        > ${antCls}-menu-item,
        ${antCls}-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > ${antCls}-menu-item-group > ${antCls}-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: ${colorSplit};
            content: '';
          }
        }

        > ${antCls}-menu-item,
          > ${antCls}-menu-submenu
          > ${antCls}-menu-submenu-title,
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-title,
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-list
          > ${antCls}-menu-item,
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-list
          > ${antCls}-menu-submenu
          > ${antCls}-menu-submenu-title,
          &${antCls}-menu-inline
          > ${antCls}-menu-item-group
          > ${antCls}-menu-item-group-list
          > ${antCls}-menu-item {
          padding-left: 40px !important;

          ${antCls}-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &${antCls}-menu-inline {
          ${antCls}-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            ${antCls}-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          ${antCls}-menu-item-group-list > ${antCls}-menu-item {
            padding-left: 80px !important;

            ${antCls}-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        ${antCls}-menu-item-group:first-child {
          ${antCls}-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `,
    mainMenu: css`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `,
  };
};

const Sidebar: React.FC = () => {
  const sidebarData = useSidebarData();
  const { isMobile, theme } = useContext(SiteContext);
  const styles = useStyle();

  const [menuItems, selectedKey] = useMenu();
  const isDark = theme.includes('dark');
  const {
    token: { colorBgContainer, colorBgTextHover },
  } = useSiteToken();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuChild = (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: colorBgContainer,
            subMenuItemBg: colorBgContainer,
            itemHoverBg: colorBgTextHover,
            darkItemBg: colorBgContainer,
            darkSubMenuItemBg: colorBgContainer,
            darkItemHoverBg: colorBgTextHover,
          },
        },
      }}
    >
      <Menu
        items={menuItems}
        inlineIndent={30}
        css={styles.asideContainer}
        mode="inline"
        theme={isDark ? 'dark' : 'light'}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={sidebarData?.map(({ title }) => title).filter(item => item) as string[]}
        onClick={() => {
          setMobileMenuOpen(false);
        }}
      />
    </ConfigProvider>
  );

  return isMobile ? (
    <>
      <FloatButton
        type={mobileMenuOpen ? 'primary' : 'default'}
        icon={mobileMenuOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        onClick={() => {
          setMobileMenuOpen(true);
        }}
        style={{ insetInlineStart: 24 }}
      />
      <Drawer
        key="Mobile-menu"
        placement="left"
        width={250}
        bodyStyle={{ padding: 0 }}
        open={mobileMenuOpen}
        onCancel={() => {
          setMobileMenuOpen(false);
        }}
      >
        {menuChild}
      </Drawer>
    </>
  ) : (
    <Col xxl={4} xl={5} lg={6} md={6} sm={24} xs={24} css={styles.mainMenu}>
      <section className="main-menu-inner">{menuChild}</section>
    </Col>
  );
};

export default Sidebar;
