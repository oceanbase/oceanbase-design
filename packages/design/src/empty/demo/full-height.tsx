import React from 'react';
import { Button, Card, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Card bodyStyle={{ height: 600 }}>
      <Empty
        fullHeight
        image={Empty.PRESENTED_IMAGE_COLORED}
        title="Create Your Cluster"
        description="There is no cluster, welcome to create one!"
      >
        <Button type="primary">Create</Button>
      </Empty>
    </Card>
  );
};
