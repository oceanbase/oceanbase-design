/**
 * iframe: 600
 */
import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie, Welcome } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
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
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Professional Management Platform',
      description: 'A professional database management platform built around OceanBase',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Full Lifecycle Management',
      description:
        'Provides full lifecycle management for OceanBase from deployment and operations to upgrade and removal',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Higher Efficiency, Lower Cost',
      description:
        'Improve OceanBase management efficiency and reduce enterprise IT operations costs',
    },
  ];
  const steps = [
    {
      title: 'Create Cluster',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Create Tenant',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Create Database',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Connect Database',
      description: 'Create a database within a tenant to connect it to your application.',
    },
  ];
  const helps = [
    {
      title: 'Create a New Cluster',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Create a New Tenant',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Clusters',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Tenants',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Tasks',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Alerts',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Add New User',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View More',
      link: 'https://www.oceanbase.com',
      isMore: true,
    },
  ];
  return (
    <BasicLayout
      location={{
        pathname: '/welcome',
      }}
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
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
      <Welcome
        title="Hi, welcome to OceanBase Cloud Platform"
        description="OceanBase Cloud Platform (OCP) is a platform for managing OceanBase database clusters. With OCP, you can install, deploy, monitor, and alert on OceanBase clusters throughout their full lifecycle. We are committed to providing efficient management services that create more value for you."
        bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
        introduces={introduces}
        steps={steps}
        buttonText="Create Cluster"
        buttonProps={{
          onClick: () => {
            message.success('You clicked the button');
          },
        }}
        helps={helps}
      />
    </BasicLayout>
  );
};
