/**
 * iframe: 600
 */
import Icon from '@ant-design/icons';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, IconFont, Lottie, Welcome } from '@oceanbase/ui';
// @ts-ignore
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
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '专业管理平台',
      description: '以 OB 为核心的专业数据库管理平台',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '全生命周期管理',
      description: '为 OB 提供从部署、运维、升级到删除的全生命周期管理',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: '更高效率，更低成本',
      description: '提高用户管理 OB 效率，降低企业IT运维成本',
    },
  ];
  const steps = [
    {
      title: '创建集群',
      description: '在租户内创建数据库，数据库即可对接应用。',
    },
    {
      title: '创建租户',
      description: '在租户内创建数据库，数据库即可对接应用。',
    },
    {
      title: '创建数据库',
      description: '在租户内创建数据库，数据库即可对接应用。',
    },
    {
      title: '连接数据库',
      description: '在租户内创建数据库，数据库即可对接应用。',
    },
  ];
  const helps = [
    {
      title: '创建新的集群',
      link: 'https://www.alipay.com',
    },
    {
      title: '创建新的租户',
      link: 'https://www.alipay.com',
    },
    {
      title: '管理集群',
      link: 'https://www.alipay.com',
    },
    {
      title: '管理租户',
      link: 'https://www.alipay.com',
    },
    {
      title: '查看任务',
      link: 'https://www.alipay.com',
    },
    {
      title: '查看告警',
      link: 'https://www.alipay.com',
    },
    {
      title: '添加新用户',
      link: 'https://www.alipay.com',
    },
    {
      title: '查看更多',
      link: 'https://www.alipay.com',
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
        title="Hi，欢迎使用 OceanBase 云平台"
        description="OceanBase 云平台 (OceanBase Cloud Platform，OCP) 是用于管控 OceanBase 数据库集群的平台。通过 OCP，您可以对 OceanBase 集群进行安装、部署、监控、告警等全生命周期管理。我们致力于提供高效的管理服务，为您创造更多价值。"
        bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
        introduces={introduces}
        steps={steps}
        buttonText="创建集群"
        buttonProps={{
          onClick: () => {
            message.success('你点击了按钮');
          },
        }}
        helps={helps}
      />
    </BasicLayout>
  );
};
