/**
 * iframe: 600
 */
import React from 'react';
import { Button, Card, Descriptions } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={false}
      title="Page Title"
      footer={[<Button type="primary">Submit</Button>, <Button>Reset</Button>]}
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
