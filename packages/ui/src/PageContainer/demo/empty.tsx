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
        title: 'Dashboard',
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
        <Empty image={Empty.PRESENTED_IMAGE_COLORED} title="Create your first cluster">
          <Button type="primary">Create Now</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
