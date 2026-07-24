/**
 * iframe: 600
 */
import React from 'react';
import { Badge, Dropdown, Menu, message, Space } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import { CaretDownFilled } from '@oceanbase/icons';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: 'Dashboard',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/topo',
      title: 'Topology',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/tenant',
      title: 'Tenants',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/monitor',
      title: 'Performance',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/report',
      title: 'Reports',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/resource',
      title: 'Resources',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/health',
      title: 'Health Check',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/compaction',
      title: 'Compaction',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/backup',
      title: 'Backup',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/parameter',
      title: 'Parameters',
    },
  ];
  const subSidemenus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-cluster',
      title: 'Clusters',
      icon: <IconFont type="cluster" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-host',
      title: 'Hosts',
      icon: <IconFont type="host" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-package',
      title: 'Packages',
      icon: <IconFont type="package" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-obproxy',
      title: 'OBProxy',
      icon: <IconFont type="obproxy" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-system',
      title: 'System',
      icon: <IconFont type="system" />,
      children: [
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-alarm',
          title: 'Alerts',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-task',
          title: 'Tasks',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-inspection',
          title: 'Inspection',
          divider: true,
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-log',
          title: 'Logs',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auth',
          title: 'Security',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-property',
          title: 'Settings',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auditEvent',
          title: 'History',
        },
      ],
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  const sideHeader = (
    <div
      style={{
        textAlign: 'center',
        padding: '10px 0',
      }}
    >
      <Space size={8}>
        <Badge status="success" />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="mysql">mysql</Menu.Item>
              <Menu.Item key="oracle">oracle</Menu.Item>
            </Menu>
          }
        >
          <Space
            size={14}
            style={{
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 600 }}>mysql</span>
            <CaretDownFilled
              style={{
                fontSize: 12,
                color: '#8592AD',
              }}
            />
          </Space>
        </Dropdown>
      </Space>
    </div>
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-demo-subsidemenu/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
      subSideMenus={subSidemenus}
      subSideMenuProps={{ defaultSelectedKeys: ['/~demos/basiclayout-demo-subsidemenu/overview'] }}
      sideHeader={sideHeader}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
