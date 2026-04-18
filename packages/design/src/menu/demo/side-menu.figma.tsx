import {
  AimOutlined,
  AlertOutlined,
  CirculationOutlined,
  ClusterOutlined,
  DatabaseAuditRadiusOutlined,
  DatasourceOutlined,
  GlobalOutlined,
  IntegrationOutlined,
  LogServiceOutlined,
  OverviewFilled,
  PlConsoleOutlined,
  ServiceOutlined,
  SettingOutlined,
  SwapOutlined,
  UserGroupOutlined,
  WorkbenchOutlined,
} from '@oceanbase/icons';
import type { MenuProps } from '@oceanbase/design';
import { Col, Layout, Menu, Row, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_SIDEMENU 的 `sideMenuNode` / `example` 一致。
 * `status` 仅 default / fold 两档 → 用 Switch 表示 fold。
 */

type MenuItem = NonNullable<MenuProps['items']>[number];

const SIDE_MENU_ITEMS = [
  { key: 'home', icon: <OverviewFilled />, label: 'Home' },
  { key: 'instances', icon: <ClusterOutlined />, label: 'Instances' },
  { key: 'sql', icon: <PlConsoleOutlined />, label: 'SQL Console' },
  {
    key: 'dev',
    icon: <WorkbenchOutlined />,
    label: 'Data Development',
  },
  {
    type: 'group' as const,
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
    type: 'group' as const,
    label: <span className="code-connect-side-menu-group-label">SECURITY</span>,
    children: [
      { key: 'networking', icon: <GlobalOutlined />, label: 'Networking' },
      { key: 'events', icon: <LogServiceOutlined />, label: 'Events' },
    ],
  },
  {
    type: 'group' as const,
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
];

/** 折叠时 Ant Design 仍会渲染 group 标题，窄侧栏会截断；折叠态改为扁平 items，仅保留图标菜单项。 */
function getSideMenuItems(collapsed: boolean): MenuProps['items'] {
  if (!collapsed) {
    return SIDE_MENU_ITEMS;
  }
  const flat: MenuItem[] = [];
  for (const item of SIDE_MENU_ITEMS) {
    if (
      item &&
      typeof item === 'object' &&
      'type' in item &&
      item.type === 'group' &&
      'children' in item &&
      item.children
    ) {
      flat.push(...item.children);
    } else {
      flat.push(item as MenuItem);
    }
  }
  return flat;
}

function FigmaSideMenuExample(props: { status: 'default' | 'fold' }) {
  const { status } = props;
  const collapsed = status === 'fold';

  const sideMenuNode = useMemo(
    () => (
      <Layout.Sider
        theme="light"
        width={200}
        collapsedWidth={80}
        collapsed={collapsed}
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
          inlineCollapsed={collapsed}
          inlineIndent={24}
          defaultSelectedKeys={['home']}
          style={{ border: 'none', background: '#f5f8ff' }}
          items={getSideMenuItems(collapsed)}
        />
      </Layout.Sider>
    ),
    [collapsed]
  );

  return (
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
  );
}

const App: React.FC = () => {
  const [fold, setFold] = useState(false);
  const status: 'default' | 'fold' = fold ? 'fold' : 'default';

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 400,
        border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--ant-color-bg-container, #fff)',
      }}
    >
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 360,
          padding: 16,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
          overflow: 'auto',
        }}
      >
        <FigmaSideMenuExample status={status} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          SideMenu
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>status：fold</span>
            <Switch checked={fold} onChange={setFold} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
