/**
 * iframe: 600
 */
import React from 'react';
import { Alert, Menu, message, Popconfirm, Typography } from '@oceanbase/design';
import { BasicLayout, IconFont, Lottie } from '@oceanbase/ui';
import Icon, { CloseOutlined } from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';

const { Paragraph } = Typography;

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
  const topHeaderTitle = (
    <Alert
      style={{
        backgroundColor: '#FAFAFA',
        color: '#fa8c16 !important',
        marginTop: -4,
        marginBottom: -4,
        paddingTop: 4,
        paddingBottom: 4,
      }}
      message={
        <Paragraph
          ellipsis={{
            rows: 1,
          }}
          style={{ marginBottom: 0 }}
        >
          {
            '客户端与服务器时间差过大，时间差为 -90 秒。请矫正客户端或服务器时间，时间差需小于 60 秒'
          }
        </Paragraph>
      }
      action={
        <a
          onClick={() => {
            message.success('发起校验成功');
          }}
        >
          再次校验
        </a>
      }
      type="warning"
      banner={true}
      showIcon={true}
      closable={true}
      closeText={
        <Popconfirm
          placement="topRight"
          title="建议调整时间，再次校验时间差小于 60 秒后关闭此提示。确定要关闭此提示吗？"
          onCancel={e => {
            // 阻止事件冒泡，避免触发 Alert 的自动关闭行为
            e?.stopPropagation();
          }}
        >
          <CloseOutlined
            onClick={e => {
              e.stopPropagation();
            }}
          />
        </Popconfirm>
      }
    />
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        title: topHeaderTitle,
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
