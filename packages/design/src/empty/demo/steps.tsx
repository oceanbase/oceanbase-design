import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  const description = 'This is a long long long long long long description.';
  const steps = [
    {
      title: 'First',
      description,
    },
    {
      title: 'Second',
      description,
    },
    {
      title: 'Third',
      description,
    },
    {
      title: 'Fourth',
      description,
    },
  ];

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_COLORED}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
      steps={steps}
    >
      <Button type="primary">Create Cluster</Button>
    </Empty>
  );
};
