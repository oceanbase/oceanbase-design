import React from 'react';
import { Segmented, Space } from '@oceanbase/design';

export default () => {
  return (
    <Space direction="vertical">
      <Segmented options={['Daily', 'Weekly', 'Monthly']} disabled />
      <Segmented
        options={[
          'Daily',
          { label: 'Weekly', value: 'Weekly', disabled: true },
          'Monthly',
          { label: 'Quarterly', value: 'Quarterly', disabled: true },
          'Yearly',
        ]}
      />
    </Space>
  );
};
