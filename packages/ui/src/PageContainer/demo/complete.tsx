import React, { useState } from 'react';
import {
  Button,
  Card,
  Descriptions,
  Dropdown,
  Modal,
  message,
  Table,
  Space,
} from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('刷新成功');
    });
    return promise;
  };

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '7',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '8',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '9',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '10',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <PageContainer
      ghost={true}
      loading={loading}
      header={{
        title: '页面标题',
        onBack: () => {},
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: '一级页面',
            },
            {
              href: '',
              title: '二级页面',
            },
            {
              title: '当前页面',
            },
          ],
        },
        extra: [
          <Button
            key="1"
            onClick={() => {
              Modal.confirm({
                title: '确定要执行当前任务吗？',
                onOk: () => {
                  return mockRequest().then(() => {
                    Modal.success({
                      title: '任务提交成功！',
                    });
                  });
                },
              });
            }}
          >
            次要按钮
          </Button>,
          <Button key="2" type="primary">
            主要按钮
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '下拉菜单',
                  key: '1',
                },
                {
                  label: '下拉菜单2',
                  key: '2',
                },
                {
                  label: '下拉菜单3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button>重置</Button>, <Button type="primary">提交</Button>]}
    >
      <Space size={16} direction="vertical">
        <Card>
          <Descriptions>
            <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
            <Descriptions.Item label="电话号码">1810000000</Descriptions.Item>
            <Descriptions.Item label="地址">浙江省杭州市西湖区工专路</Descriptions.Item>
            <Descriptions.Item label="关联表单">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="备注">这是备注</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
        >
          <Table columns={columns} dataSource={dataSource} />
        </Card>
      </Space>
    </PageContainer>
  );
};
