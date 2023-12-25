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
      title: '总览',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/topo',
      title: '拓扑图',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/tenant',
      title: '租户管理',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/monitor',
      title: '性能监控',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/report',
      title: '性能报告',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/resource',
      title: '资源管理',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/health',
      title: '健康巡检',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/compaction',
      title: '合并管理',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/backup',
      title: '备份恢复',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/parameter',
      title: '参数管理',
    },
  ];
  const subSidemenus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: '总览',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-cluster',
      title: '集群',
      icon: <IconFont type="cluster" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-tenant',
      title: '租户',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-host',
      title: '主机',
      icon: <IconFont type="host" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-package',
      title: '软件包',
      icon: <IconFont type="package" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-obproxy',
      title: 'OBProxy',
      icon: <IconFont type="obproxy" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-backup',
      title: '备份恢复',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-system',
      title: '系统管理',
      icon: <IconFont type="system" />,
      children: [
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-alarm',
          title: '告警',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-task',
          title: '任务',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-inspection',
          title: '巡检',
          divider: true,
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-log',
          title: '日志服务',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auth',
          title: '安全',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-property',
          title: '系统参数',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auditEvent',
          title: '历史事件',
        },
      ],
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('你点击了下拉菜单');
      }}
    >
      <Menu.Item key="profile">个人设置</Menu.Item>
      <Menu.Item key="modifyPassword">修改密码</Menu.Item>
      <Menu.Item key="logout">退出登录</Menu.Item>
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
