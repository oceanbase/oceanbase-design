import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8Q4gRbl_qmMAAAAAAAAAAAAADmfOAQ/original"
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
