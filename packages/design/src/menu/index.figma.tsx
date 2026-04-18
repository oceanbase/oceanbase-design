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
  Divider,
  Flex,
  Layout,
  Menu,
  Space,
  Typography,
} from '@oceanbase/design';

/**
 * Code Connect — Menu 页（MenuItem / MenuTitle / SideMenu / SubSideMenu / TopHeader）。
 * 映射仅结构、变体、文案；不外挂 style / styles / className（§3.4c）。预览根样式见各 `demo/*.figma.tsx`（§3.4a）。
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
              items={[
                {
                  key: 'oceanbase-menu-item',
                  icon: figma.instance('icon'),
                  title: figma.string('text'),
                  label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                items={[
                  {
                    key: 'oceanbase-menu-item',
                    icon: figma.instance('icon'),
                    label: figma.string('text'),
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
                  },
                ]}
              />
            ),
          }),
        }),
      }),
    }),
  },
  example: ({ menuItemNode }) => <div>{menuItemNode}</div>,
});

// Figma: "MenuTitle" · 5307:15304
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5307-15304&m=dev
figma.connect(Typography.Title, '<FIGMA_OCEANBASE_MENUTITLE>', {
  props: {
    titleNode: figma.enum('type', {
      default: <Typography.Title level={5}>DATA SERVICE</Typography.Title>,
      subtitle: (
        <Typography.Title level={5}>
          <Space size={8} align="center">
            <ObTenantOutlined />
            TENANT
          </Space>
        </Typography.Title>
      ),
    }),
  },
  example: ({ titleNode }) => <div>{titleNode}</div>,
});

// Figma: "SideMenu" · 2322:661
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2322-661&m=dev
figma.connect(Layout.Sider, '<FIGMA_OCEANBASE_SIDEMENU>', {
  props: {
    sideMenuNode: figma.enum('status', {
      default: (
        <Layout.Sider theme="light" width={200} collapsedWidth={80} collapsed={false}>
          <Menu
            mode="inline"
            theme="light"
            inlineCollapsed={false}
            inlineIndent={24}
            defaultSelectedKeys={['home']}
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
                label: 'DATA SERVICE',
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
                label: 'SECURITY',
                children: [
                  { key: 'networking', icon: <GlobalOutlined />, label: 'Networking' },
                  { key: 'events', icon: <LogServiceOutlined />, label: 'Events' },
                ],
              },
              {
                type: 'group',
                label: 'MANAGEMENT',
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
      ),
      fold: (
        <Layout.Sider theme="light" width={200} collapsedWidth={80} collapsed={true}>
          <Menu
            mode="inline"
            theme="light"
            inlineCollapsed={true}
            inlineIndent={24}
            defaultSelectedKeys={['home']}
            items={[
              { key: 'home', icon: <OverviewFilled />, label: 'Home' },
              { key: 'instances', icon: <ClusterOutlined />, label: 'Instances' },
              { key: 'sql', icon: <PlConsoleOutlined />, label: 'SQL Console' },
              {
                key: 'dev',
                icon: <WorkbenchOutlined />,
                label: 'Data Development',
              },
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
              { key: 'networking', icon: <GlobalOutlined />, label: 'Networking' },
              { key: 'events', icon: <LogServiceOutlined />, label: 'Events' },
              { key: 'alert', icon: <AlertOutlined />, label: 'Alert' },
              { key: 'self-healing', icon: <AimOutlined />, label: 'Self-healing' },
              {
                key: 'integrations',
                icon: <IntegrationOutlined />,
                label: 'Integrations',
              },
              { key: 'members', icon: <UserGroupOutlined />, label: 'Members' },
              { key: 'settings', icon: <SettingOutlined />, label: 'Project Setting' },
            ]}
          />
        </Layout.Sider>
      ),
    }),
  },
  example: ({ sideMenuNode }) => <div>{sideMenuNode}</div>,
});

// Figma: "SubSideMenu" · 2324:2639 — 根节点无 Figma 组件属性；整段 UI 映射为单一节点（gen-figma §3.1 例外：无法用离散 props 表达整棵侧栏稿）。
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-2639&m=dev
figma.connect(Layout, '<FIGMA_OCEANBASE_SUBSIDEMENU>', {
  props: {
    subSideRoot: (
      <Layout>
        <Typography.Title level={5}>
          <Space size={8} align="center">
            <ObTenantOutlined />
            TENANT
          </Space>
        </Typography.Title>
        <Divider />
        <Menu
          mode="inline"
          theme="light"
          inlineIndent={40}
          selectedKeys={['overview']}
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
    ),
  },
  example: ({ subSideRoot }) => <div>{subSideRoot}</div>,
});

// Figma: "TopHeader" · 2324:3145 — 根节点无 Figma variant；头像字符绑定 TEXT 层「Y」（get_context_for_code_connect）。
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-3145&m=dev
figma.connect(Layout.Header, '<FIGMA_OCEANBASE_TOPHEADER>', {
  props: {
    headerNode: (
      <Layout.Header>
        <Flex justify="space-between" align="center" gap={16}>
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
            <Divider type="vertical" />
            <BillingOutlined />
            <HelpOutlined />
            <AlertOutlined />
            <LanguageEnOutlined />
            <Avatar size={24}>{figma.textContent('Y')}</Avatar>
          </Space>
        </Flex>
      </Layout.Header>
    ),
  },
  example: ({ headerNode }) => <div>{headerNode}</div>,
});
