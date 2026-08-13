import React from 'react';
import { Button, Card, Descriptions, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <PageContainer
      ghost={false}
      header={{
        title: 'Page Title',
        extra: [
          <Button key="1">Secondary</Button>,
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
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    >
      <Card>
        <Descriptions title="Basic Info">
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
    </PageContainer>
  );
};
