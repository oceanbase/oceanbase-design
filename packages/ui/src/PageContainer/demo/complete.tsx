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
      message.success('Refreshed successfully');
    });
    return promise;
  };

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <PageContainer
      ghost={true}
      loading={loading}
      header={{
        title: 'Page Title',
        subTitle: 'Subtitle',
        onBack: () => {},
        document: 'https://www.oceanbase.com',
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
              title: 'Level 1 Page',
            },
            {
              href: '',
              title: 'Level 2 Page',
            },
            {
              title: 'Current Page',
            },
          ],
        },
        extra: [
          <Button
            key="1"
            onClick={() => {
              Modal.confirm({
                title: 'Are you sure you want to run this task?',
                onOk: () => {
                  return mockRequest().then(() => {
                    Modal.success({
                      title: 'Task submitted successfully!',
                    });
                  });
                },
              });
            }}
          >
            Secondary
          </Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button type="primary">Submit</Button>, <Button>Reset</Button>]}
      footerToolBarProps={{
        extra: 'Some extra message',
      }}
    >
      <Space size={16} direction="vertical">
        <Card>
          <Descriptions>
            <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
            <Descriptions.Item label="Related Form">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          tabList={[
            {
              tab: 'Basic Info',
              key: 'base',
            },
            {
              tab: 'Details',
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
