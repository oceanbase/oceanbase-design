import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return (
    <Segmented
      block
      options={[
        123,
        456,
        {
          value: 'longtext1',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: true,
          },
        },
        {
          value: 'longtext2',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: {
              title: 'custom tooltip title',
              placement: 'topLeft',
            },
          },
        },
      ]}
    />
  );
};
