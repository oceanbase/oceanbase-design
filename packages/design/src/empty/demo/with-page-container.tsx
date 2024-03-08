import React from 'react';
import { Empty, Button, Card } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={true}
      header={{
        title: 'Page Title',
      }}
    >
      <Card
        bordered={false}
        bodyStyle={{
          height: 'calc(100vh - 96px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_COLORED}
          title="Create Your Cluster"
          description="There is no cluster, welcome to create one!"
        >
          <Button type="primary">Create</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
