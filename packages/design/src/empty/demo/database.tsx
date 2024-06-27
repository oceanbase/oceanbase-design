import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_DATABASE}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
