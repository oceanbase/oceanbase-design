import React from 'react';
import { PageLoading } from '@oceanbase/ui';
import { Card } from '@oceanbase/design';

export default () => {
  return (
    <Card
      title="Card title"
      bodyStyle={{
        height: 400,
      }}
    >
      <PageLoading matchWrapperHeight={true} />
    </Card>
  );
};
