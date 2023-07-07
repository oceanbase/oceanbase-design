/**
 * iframe: 600
 */
import { message } from '@oceanbase/design';
import { Welcome } from '@oceanbase/ui';

export default () => {
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
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '在租户内创建数据库，数据库即可对接应用。',
      operations: [
        {
          text: '创建应用服务',
          onClick: () => {
            console.info('我被点击了');
          },
        },
      ],
    },
    {
      title: '创建租户',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '在租户内创建数据库，数据库即可对接应用。',
      operations: [
        {
          text: '',
          onClick: () => {
            console.info('我被点击了');
          },
        },
      ],
    },
    {
      title: '创建数据库',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '在租户内创建数据库，数据库即可对接应用。',
      operations: [
        {
          text: '创建应用服务',
          onClick: () => {
            console.info('我被点击了');
          },
        },
      ],
    },
    {
      title: '连接数据库',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: '在租户内创建数据库，数据库即可对接应用。',
      operations: [
        {
          text: '创建应用服务',
          onClick: () => {
            console.info('我被点击了');
          },
        },
      ],
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
    <Welcome
      title="Hi，欢迎使用 OceanBase 云平台"
      description="OceanBase 云平台 (OceanBase Cloud Platform，OCP) 是用于管控 OceanBase 数据库集群的平台。通过 OCP，您可以对 OceanBase 集群进行安装、部署、监控、告警等全生命周期管理。我们致力于提供高效的管理服务，为您创造更多价值。"
      bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
      introduces={introduces}
      steps={steps}
      stepType="card"
      buttonText="创建集群"
      buttonProps={{
        onClick: () => {
          message.success('你点击了按钮');
        },
      }}
      helps={helps}
    />
  );
};
