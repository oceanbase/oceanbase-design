/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { Alert, Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const [alertVisible, setalertVisible] = useState(true);
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: `/~demos/basiclayout-basic/diagnosis/realtime`,
          title: 'Real-time',
        },

        {
          link: `/~demos/basiclayout-basic/diagnosis/capacity`,
          title: 'Capacity',
        },

        {
          link: `/~demos/basiclayout-basic/diagnosis/report`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
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
      banner={
        alertVisible && (
          <Alert
            message="Your browser version is outdated. To avoid potential security risks, please upgrade Chrome to version 80 or later."
            type="warning"
            banner={true}
            showIcon={true}
            closable={true}
            onClose={() => {
              setalertVisible(false);
            }}
          />
        )
      }
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
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
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
