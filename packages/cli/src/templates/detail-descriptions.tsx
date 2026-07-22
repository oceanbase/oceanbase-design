import React from 'react';
import { ConfigProvider, Card, Descriptions } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default function DetailDescriptionsPage() {
  return (
    <ConfigProvider>
      <PageContainer title="Detail">
        <Card>
          <Descriptions column={2} bordered>
            <Descriptions.Item label="Name">—</Descriptions.Item>
            <Descriptions.Item label="ID">—</Descriptions.Item>
          </Descriptions>
        </Card>
      </PageContainer>
    </ConfigProvider>
  );
}
