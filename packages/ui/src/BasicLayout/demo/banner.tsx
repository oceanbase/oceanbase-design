/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { Alert, Menu, message } from '@oceanbase/design';
import { BasicLayout, IconFont, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';

export default () => {
  const [alertVisible, setalertVisible] = useState(true);
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: '总览',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: '租户管理',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: '监控中心',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: '诊断中心',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: `/~demos/basiclayout-basic/diagnosis/realtime`,
          title: '实时诊断',
        },

        {
          link: `/~demos/basiclayout-basic/diagnosis/capacity`,
          title: '容量中心',
        },

        {
          link: `/~demos/basiclayout-basic/diagnosis/report`,
          title: '报告中心',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: '备份恢复',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: '日志服务',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: '系统参数',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
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
  return (
    <BasicLayout
      banner={
        alertVisible && (
          <Alert
            message="当前浏览器版本过低，为避免可能存在的安全隐患，建议将 Chrome 浏览器升级到 80 及以上版本"
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
