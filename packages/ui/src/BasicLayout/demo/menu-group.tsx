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
      title: '总览',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      type: 'group' as const,
      title: '集群管理',
      children: [
        {
          link: '/~demos/basiclayout-demo-menu-group/cluster',
          title: '集群列表',
          icon: <IconFont type="tenant" />,
        },
        {
          link: '/~demos/basiclayout-demo-menu-group/host',
          title: '主机列表',
          icon: <IconFont type="diagnosis" />,
        },
      ],
    },
    {
      type: 'group' as const,
      title: '运维监控',
      children: [
        {
          link: '/~demos/basiclayout-demo-menu-group/monitor',
          title: '监控中心',
          icon: <Icon component={MonitorSvg} />,
          selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
        },
        {
          link: '/~demos/basiclayout-demo-menu-group/backup',
          title: '备份恢复',
          icon: <IconFont type="backup" />,
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-menu-group/property',
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
