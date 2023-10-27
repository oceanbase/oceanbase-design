/**
 * iframe: 600
 */
import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, IconFont, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';

export default () => {
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
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
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
