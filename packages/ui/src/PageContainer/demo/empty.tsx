/**
 * iframe: 600
 */
import React from 'react';
import { Button, Card, Empty } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      header={{
        title: '总览',
      }}
    >
      <Card
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 72px - 24px)',
        }}
      >
        <Empty image={Empty.PRESENTED_IMAGE_COLORED} title="创建第一个集群">
          <Button type="primary">立即创建</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
