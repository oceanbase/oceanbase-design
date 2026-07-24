/**
 * iframe: 600
 */
import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-menu-group/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      type: 'group' as const,
      title: 'Cluster Management',
      children: [
        {
          link: '/~demos/basiclayout-demo-menu-group/cluster',
          title: 'Cluster List',
          icon: <IconFont type="tenant" />,
        },
        {
          link: '/~demos/basiclayout-demo-menu-group/host',
          title: 'Host List',
          icon: <IconFont type="diagnosis" />,
        },
      ],
    },
    {
      type: 'group' as const,
      title: 'Operations',
      children: [
        {
          link: '/~demos/basiclayout-demo-menu-group/monitor',
          title: 'Monitoring',
          icon: <Icon component={MonitorSvg} />,
          selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
        },
        {
          link: '/~demos/basiclayout-demo-menu-group/backup',
          title: 'Backup',
          icon: <IconFont type="backup" />,
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-menu-group/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
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
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-demo-menu-group/overview']}
      topHeader={{
        welcomePath: '/welcome',
        versionNoticePath: '/docs/index.html',
        docsPath: '/docs/index.html',
        pdfPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP Express',
          version: '1.0.0',
          releaseTime: '2022-12-30 00:00:00',
        },
      }}
    >
      <PageContainerCompleteDemo />
    </BasicLayout>
  );
};
