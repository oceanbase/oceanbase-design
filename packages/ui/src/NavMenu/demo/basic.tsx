import { Layout } from '@oceanbase/design';
import { NavMenu } from '@oceanbase/ui';
import './style.less';

const { Sider } = Layout;

export default () => {
  const menuList = [
    {
      key: 'cluster',
      title: 'ClusterList',
      link: [
        '/components/nav-menu',
        // 支持匹配 id
        '/components/nav-menu/:id',
        // 支持匹配 id，并为 id 设置格式
        '/components/nav-menu/:id([0-9]+)',
        // 支持匹配具体的 id 值
        '/components/nav-menu/2',
      ],
      id: '',
      children: [
        {
          key: 'clusterWorkbench',
          title: 'ClusterWorkbench',
          link: '/components/nav-menu/123/workbench',
          disabled: true,
          id: '',
        },
        {
          key: 'tenantList',
          title: 'TenantManagement',
          link: '/components/nav-menu/123/tenantList',
          disabled: false,
          id: '',
          children: [
            {
              key: 'tenantWorkbench',
              title: 'TenantWorkbench',
              link: '/components/nav-menu/123/tenant/123/workbench',
              disabled: false,
              id: '',
            },

            {
              key: 'tenantDatabase',
              title: 'DatabaseManagement',
              link: '/components/nav-menu/123/tenant/123/database',
              disabled: false,
              id: '',
            },
          ],
        },
        {
          key: 'clusterMonitor',
          title: 'PerformanceMonitoring',
          link: '/components/nav-menu',
          disabled: false,
          id: '',
        },
        {
          key: 'clusterBackup',
          title: 'BackupAndRestoration',
          link: '/components/nav-menu',
          disabled: false,
          id: '',
        },
      ],
    },

    {
      key: 'fee',
      title: 'Fees',
      link: `/charge`,
      disabled: false,
      id: '',
    },

    {
      key: 'operationEvent',
      title: 'HistoricalEvents',
      link: `/operationEvent`,
      disabled: false,
      id: '',
    },
  ];

  return (
    <Layout style={{ width: 225, paddingBottom: 10 }}>
      <Sider theme="light" className="layoutSider">
        <NavMenu menuList={menuList} />
      </Sider>
    </Layout>
  );
};
