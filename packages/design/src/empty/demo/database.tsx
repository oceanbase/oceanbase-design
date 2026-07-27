import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_DATABASE}
      title="Create Your First Resource"
      description="Nothing here yet. Create one to get started."
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
