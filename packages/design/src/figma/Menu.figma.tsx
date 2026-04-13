// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  AimOutlined,
  AlertOutlined,
  CirculationOutlined,
  ClusterOutlined,
  DatabaseAuditRadiusOutlined,
  DatasourceOutlined,
  ExportOutlined,
  GlobalOutlined,
  HelpOutlined,
  IntegrationOutlined,
  LanguageEnOutlined,
  LogServiceOutlined,
  ObTenantOutlined,
  OverviewFilled,
  PlConsoleOutlined,
  ServiceOutlined,
  SettingOutlined,
  SwapOutlined,
  UserGroupOutlined,
  WorkbenchOutlined,
  BillingOutlined,
} from '@oceanbase/icons';
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  ConfigProvider,
  Divider,
  Layout,
  Menu,
  Space,
  Typography,
} from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Menu"
 * 设计依据：各块上方 Figma URL；MCP get_design_context / get_context_for_code_connect。
 */

// Figma: "MenuItem" · 2266:3569
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2266-3569&m=dev
figma.connect(Menu, '<FIGMA_OCEANBASE_MENUITEM>', {
  props: {
    menuItemNode: figma.enum('type', {
      default: figma.enum('focus', {
        no: figma.enum('status', {
          Default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: {},
                },
              ]}
            />
          ),
          selected: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: {},
                },
              ]}
            />
          ),
          hover: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: { backgroundColor: 'rgba(0, 0, 0, 0.06)' },
                },
              ]}
            />
          ),
          default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: {},
                },
              ]}
            />
          ),
        }),
        yes: figma.enum('status', {
          Default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
          selected: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
          hover: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
          default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 200, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
        }),
      }),
      fold: figma.enum('focus', {
        no: figma.enum('status', {
          Default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: {},
                },
              ]}
            />
          ),
          selected: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: {},
                },
              ]}
            />
          ),
          hover: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: { backgroundColor: 'rgba(0, 0, 0, 0.06)' },
                },
              ]}
            />
          ),
          default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={[]}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: {},
                },
              ]}
            />
          ),
        }),
        yes: figma.enum('status', {
          Default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
          selected: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
          hover: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
          default: (
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              selectedKeys={['oceanbase-menu-item']}
              style={{ width: 80, border: 'none' }}
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
                  style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
                },
              ]}
            />
          ),
        }),
      }),
      subitem: figma.boolean('jumpoff', {
        false: figma.enum('focus', {
          no: figma.enum('status', {
            Default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            selected: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={[]}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32 },
                  },
                ]}
              />
            ),
            hover: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={[]}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32, backgroundColor: 'rgba(0, 0, 0, 0.06)' },
                  },
                ]}
              />
            ),
            default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={[]}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32 },
                  },
                ]}
              />
            ),
          }),
          yes: figma.enum('status', {
            Default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            selected: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            hover: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
          }),
        }),
        true: figma.enum('focus', {
          no: figma.enum('status', {
            Default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            selected: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={[]}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32 },
                  },
                ]}
              />
            ),
            hover: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={[]}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32, backgroundColor: 'rgba(0, 0, 0, 0.06)' },
                  },
                ]}
              />
            ),
            default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={[]}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32 },
                  },
                ]}
              />
            ),
          }),
          yes: figma.enum('status', {
            Default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            selected: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            hover: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
            default: (
              <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                inlineIndent={40}
                selectedKeys={['oceanbase-menu-item']}
                style={{ width: 200, border: 'none' }}
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: (
                      <Space size={8} align="center">
                        <span>{figma.string('text')}</span>
                        <ExportOutlined />
                      </Space>
                    ),
                    style: { paddingLeft: 32, boxShadow: 'inset 0 0 0 2px #1677ff' },
                  },
                ]}
              />
            ),
          }),
        }),
      }),
    }),
  },
  example: ({ menuItemNode }) => (
    <div
      style={{
        minWidth: 0,
        width: '100%',
        maxWidth: 320,
        padding: 16,
        background: '#f5f5f5',
        borderRadius: 8,
      }}
    >
      {menuItemNode}
    </div>
  ),
});

// Figma: "MenuTitle" · 5307:15304
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5307-15304&m=dev
figma.connect(Typography.Title, '<FIGMA_OCEANBASE_MENUTITLE>', {
  props: {
    titleNode: figma.enum('type', {
      default: (
        <Typography.Title
          level={5}
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 600,
            lineHeight: '20px',
            letterSpacing: '0.06em',
            color: '#8b9bb8',
            textTransform: 'uppercase',
          }}
        >
          DATA SERVICE
        </Typography.Title>
      ),
      subtitle: (
        <Typography.Title
          level={5}
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            color: '#5c6b8a',
          }}
        >
          <Space size={8} align="center">
            <ObTenantOutlined />
            TENANT
          </Space>
        </Typography.Title>
      ),
    }),
  },
  example: ({ titleNode }) => (
    <div style={{ padding: 16, background: '#f5f8ff', borderRadius: 8, maxWidth: 400 }}>
      {titleNode}
    </div>
  ),
});

// Figma: "SideMenu" · 2322:661
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2322-661&m=dev
figma.connect(Layout.Sider, '<FIGMA_OCEANBASE_SIDEMENU>', {
  props: {
    sideMenuNode: figma.enum('status', {
      default: (
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                colorBgContainer: '#f5f8ff',
                itemBg: 'transparent',
                subMenuItemBg: 'transparent',
                itemColor: '#5c6b8a',
                itemHoverBg: 'rgba(0, 106, 255, 0.06)',
                itemHoverColor: '#1d2129',
                itemSelectedBg: '#e6f0ff',
                itemSelectedColor: '#1d2129',
                activeBarWidth: 0,
                groupTitleFontSize: 12,
                groupTitleLineHeight: '20px',
                groupTitleColor: '#8b9bb8',
                iconSize: 16,
                itemMarginInline: 8,
                itemBorderRadius: 6,
              },
            },
          }}
        >
          <style>{`
      .code-connect-side-menu-group-label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: #8b9bb8;
      }
      .code-connect-saas-sidebar-menu.ant-menu .ant-menu-item-selected {
        font-weight: 600;
      }
      .code-connect-saas-sidebar-menu.ant-menu .ant-menu-item-selected .anticon {
        color: #006aff !important;
      }
    `}</style>
          <Layout.Sider
            theme="light"
            width={200}
            collapsedWidth={80}
            collapsed={false}
            style={{
              background: '#f5f8ff',
              borderRight: '1px solid #e2e8f3',
              overflow: 'auto',
            }}
          >
            <Menu
              className="code-connect-saas-sidebar-menu"
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              inlineIndent={24}
              defaultSelectedKeys={['home']}
              style={{ border: 'none', background: '#f5f8ff' }}
              items={[
                { key: 'home', icon: <OverviewFilled />, label: 'Home' },
                { key: 'instances', icon: <ClusterOutlined />, label: 'Instances' },
                { key: 'sql', icon: <PlConsoleOutlined />, label: 'SQL Console' },
                {
                  key: 'dev',
                  icon: <WorkbenchOutlined />,
                  label: 'Data Development',
                },
                {
                  type: 'group',
                  label: <span className="code-connect-side-menu-group-label">DATA SERVICE</span>,
                  children: [
                    { key: 'migrations', icon: <SwapOutlined />, label: 'Migrations' },
                    {
                      key: 'verification',
                      icon: <DatabaseAuditRadiusOutlined />,
                      label: 'Verification',
                    },
                    {
                      key: 'subscription',
                      icon: <ServiceOutlined />,
                      label: 'Data Subscription',
                    },
                    {
                      key: 'lifecycle',
                      icon: <CirculationOutlined />,
                      label: 'Data Lifecycle',
                    },
                    { key: 'sources', icon: <DatasourceOutlined />, label: 'Data Sources' },
                  ],
                },
                {
                  type: 'group',
                  label: <span className="code-connect-side-menu-group-label">SECURITY</span>,
                  children: [
                    { key: 'networking', icon: <GlobalOutlined />, label: 'Networking' },
                    { key: 'events', icon: <LogServiceOutlined />, label: 'Events' },
                  ],
                },
                {
                  type: 'group',
                  label: <span className="code-connect-side-menu-group-label">MANAGEMENT</span>,
                  children: [
                    { key: 'alert', icon: <AlertOutlined />, label: 'Alert' },
                    { key: 'self-healing', icon: <AimOutlined />, label: 'Self-healing' },
                    {
                      key: 'integrations',
                      icon: <IntegrationOutlined />,
                      label: 'Integrations',
                    },
                    { key: 'members', icon: <UserGroupOutlined />, label: 'Members' },
                    { key: 'settings', icon: <SettingOutlined />, label: 'Project Setting' },
                  ],
                },
              ]}
            />
          </Layout.Sider>
        </ConfigProvider>
      ),
      fold: (
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                colorBgContainer: '#f5f8ff',
                itemBg: 'transparent',
                subMenuItemBg: 'transparent',
                itemColor: '#5c6b8a',
                itemHoverBg: 'rgba(0, 106, 255, 0.06)',
                itemHoverColor: '#1d2129',
                itemSelectedBg: '#e6f0ff',
                itemSelectedColor: '#1d2129',
                activeBarWidth: 0,
                groupTitleFontSize: 12,
                groupTitleLineHeight: '20px',
                groupTitleColor: '#8b9bb8',
                iconSize: 16,
                itemMarginInline: 8,
                itemBorderRadius: 6,
              },
            },
          }}
        >
          <style>{`
      .code-connect-side-menu-group-label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: #8b9bb8;
      }
      .code-connect-saas-sidebar-menu.ant-menu .ant-menu-item-selected {
        font-weight: 600;
      }
      .code-connect-saas-sidebar-menu.ant-menu .ant-menu-item-selected .anticon {
        color: #006aff !important;
      }
    `}</style>
          <Layout.Sider
            theme="light"
            width={200}
            collapsedWidth={80}
            collapsed={true}
            style={{
              background: '#f5f8ff',
              borderRight: '1px solid #e2e8f3',
              overflow: 'auto',
            }}
          >
            <Menu
              className="code-connect-saas-sidebar-menu"
              mode="inline"
              theme="light"
              inlineCollapsed={true}
              inlineIndent={24}
              defaultSelectedKeys={['home']}
              style={{ border: 'none', background: '#f5f8ff' }}
              items={[
                { key: 'home', icon: <OverviewFilled />, label: 'Home' },
                { key: 'instances', icon: <ClusterOutlined />, label: 'Instances' },
                { key: 'sql', icon: <PlConsoleOutlined />, label: 'SQL Console' },
                {
                  key: 'dev',
                  icon: <WorkbenchOutlined />,
                  label: 'Data Development',
                },
                {
                  type: 'group',
                  label: <span className="code-connect-side-menu-group-label">DATA SERVICE</span>,
                  children: [
                    { key: 'migrations', icon: <SwapOutlined />, label: 'Migrations' },
                    {
                      key: 'verification',
                      icon: <DatabaseAuditRadiusOutlined />,
                      label: 'Verification',
                    },
                    {
                      key: 'subscription',
                      icon: <ServiceOutlined />,
                      label: 'Data Subscription',
                    },
                    {
                      key: 'lifecycle',
                      icon: <CirculationOutlined />,
                      label: 'Data Lifecycle',
                    },
                    { key: 'sources', icon: <DatasourceOutlined />, label: 'Data Sources' },
                  ],
                },
                {
                  type: 'group',
                  label: <span className="code-connect-side-menu-group-label">SECURITY</span>,
                  children: [
                    { key: 'networking', icon: <GlobalOutlined />, label: 'Networking' },
                    { key: 'events', icon: <LogServiceOutlined />, label: 'Events' },
                  ],
                },
                {
                  type: 'group',
                  label: <span className="code-connect-side-menu-group-label">MANAGEMENT</span>,
                  children: [
                    { key: 'alert', icon: <AlertOutlined />, label: 'Alert' },
                    { key: 'self-healing', icon: <AimOutlined />, label: 'Self-healing' },
                    {
                      key: 'integrations',
                      icon: <IntegrationOutlined />,
                      label: 'Integrations',
                    },
                    { key: 'members', icon: <UserGroupOutlined />, label: 'Members' },
                    { key: 'settings', icon: <SettingOutlined />, label: 'Project Setting' },
                  ],
                },
              ]}
            />
          </Layout.Sider>
        </ConfigProvider>
      ),
    }),
  },
  example: ({ sideMenuNode }) => (
    <div style={{ display: 'flex', minHeight: 360, alignItems: 'stretch' }}>
      {sideMenuNode}
      <div
        style={{
          flex: 1,
          padding: 24,
          background: '#fff',
          border: '1px dashed #e2e8f3',
          borderRadius: 8,
          marginLeft: 8,
        }}
      >
        <Typography.Text type="secondary">主内容区示意</Typography.Text>
      </div>
    </div>
  ),
});

// Figma: "SubSideMenu" · 2324:2639 — 根节点无 Figma 组件属性；整段 UI 映射为单一节点（gen-figma §3.1 例外：无法用离散 props 表达整棵侧栏稿）。
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-2639&m=dev
figma.connect(Layout, '<FIGMA_OCEANBASE_SUBSIDEMENU>', {
  props: {
    subSideRoot: (
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorBgContainer: '#fbfcfe',
              itemBg: 'transparent',
              subMenuItemBg: 'transparent',
              itemColor: '#5c6b8a',
              itemHoverBg: 'rgba(0, 106, 255, 0.06)',
              itemHoverColor: '#1d2129',
              itemSelectedBg: '#e6f0ff',
              itemSelectedColor: '#1d2129',
              activeBarWidth: 0,
              iconSize: 16,
              itemMarginInline: 8,
              itemBorderRadius: 6,
            },
          },
        }}
      >
        <style>{`
      .code-connect-sub-sidebar-menu.ant-menu .ant-menu-item-selected {
        font-weight: 600;
      }
      .code-connect-sub-sidebar-menu.ant-menu .ant-menu-item-selected .anticon {
        color: #006aff !important;
      }
    `}</style>
        <Layout
          style={{
            minHeight: '100vh',
            width: 200,
            background: '#fbfcfe',
            borderRight: '1px solid #e2e8f3',
            overflow: 'auto',
          }}
        >
          <div style={{ padding: '16px 16px 12px' }}>
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '22px',
                color: '#5c6b8a',
              }}
            >
              <Space size={8} align="center">
                <ObTenantOutlined />
                TENANT
              </Space>
            </Typography.Title>
          </div>
          <div style={{ height: 1, margin: '0 0 8px', background: '#e2e8f3' }} aria-hidden />
          <Menu
            className="code-connect-sub-sidebar-menu"
            mode="inline"
            theme="light"
            inlineIndent={40}
            selectedKeys={['overview']}
            style={{ width: 200, border: 'none', background: 'transparent' }}
            items={[
              { key: 'overview', label: 'Overview' },
              {
                key: 'sql-console',
                label: (
                  <Space size={8} align="center">
                    <span>SQL Console</span>
                    <ExportOutlined />
                  </Space>
                ),
              },
              { type: 'divider' },
              { key: 'databases', label: 'DataBases' },
              { key: 'powerrag', label: 'PowerRAG' },
              { key: 'manage-access', label: 'Manage Access' },
              { type: 'divider' },
              { key: 'load-data', label: 'Load Data' },
              { key: 'binlog', label: 'Binlog' },
              { type: 'divider' },
              { key: 'metrics', label: 'Metrics' },
              { key: 'diagnostics', label: 'Diagnostics' },
              { key: 'resource-isolation', label: 'Resource Isolation' },
              { type: 'divider' },
              { key: 'backup', label: 'Backup' },
              { key: 'parameters', label: 'Parameters' },
              { key: 'security', label: 'Security' },
              { key: 'recycle-bin', label: 'Recycle Bin' },
            ]}
          />
        </Layout>
      </ConfigProvider>
    ),
  },
  example: ({ subSideRoot }) => (
    <div style={{ display: 'flex', maxHeight: 480, overflow: 'auto' }}>{subSideRoot}</div>
  ),
});

// Figma: "TopHeader" · 2324:3145 — 根节点无 Figma variant；头像字符绑定 TEXT 层「Y」（get_context_for_code_connect）。
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-3145&m=dev
figma.connect(Layout.Header, '<FIGMA_OCEANBASE_TOPHEADER>', {
  props: {
    headerNode: (
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 44,
          padding: '12px 32px 12px 24px',
          lineHeight: 'unset',
          background: '#fbfcfe',
          borderBottom: '1px solid #e2e8f3',
        }}
      >
        <Breadcrumb
          separator="/"
          items={[
            {
              title: (
                <Space direction="horizontal" size={6}>
                  <Typography.Text type="secondary">Org-name</Typography.Text>
                  <SwapOutlined rotate={90} />
                </Space>
              ),
            },
            {
              title: (
                <Space direction="horizontal" size={6}>
                  <Typography.Text type="secondary">Project-name</Typography.Text>
                  <SwapOutlined rotate={90} />
                </Space>
              ),
            },
            {
              title: (
                <Space direction="horizontal" size={6}>
                  <Badge status="error" />
                  <Typography.Text type="secondary">Instance-name</Typography.Text>
                  <SwapOutlined rotate={90} />
                </Space>
              ),
            },
            {
              title: (
                <Space direction="horizontal" size={6}>
                  <Badge status="error" />
                  <Typography.Text strong>Tenant-name</Typography.Text>
                  <SwapOutlined rotate={90} />
                </Space>
              ),
            },
          ]}
        />
        <Space size={16} align="center">
          <Button type="default" size="small">
            Feedback
          </Button>
          <Divider type="vertical" style={{ height: 16, margin: 0 }} />
          <BillingOutlined />
          <HelpOutlined />
          <AlertOutlined />
          <LanguageEnOutlined />
          <Avatar
            size={24}
            style={{
              background: 'linear-gradient(180deg, #58abff 12.5%, #41d9a6)',
              flexShrink: 0,
            }}
          >
            {figma.textContent('Y')}
          </Avatar>
        </Space>
      </Layout.Header>
    ),
  },
  example: ({ headerNode }) => (
    <div style={{ minWidth: 0, width: '100%', maxWidth: 1220 }}>{headerNode}</div>
  ),
});
