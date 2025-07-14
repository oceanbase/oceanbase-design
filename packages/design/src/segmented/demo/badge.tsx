import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return (
    <Segmented
      block
      options={[
        123,
        {
          value: 456,
          label: 456,
          // 直接书写badge内容
          badge: 11,
        },
        {
          value: 789,
          label: 789,
          // 等价于 badge: 25
          badge: {
            count: 25,
          },
        },
        {
          value: 999,
          label: 999,
          // 自定义
          badge: {
            count: 0,
            showZero: true,
          },
        },
        // 超长文本
        {
          value: 'longtext1',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: true,
          },
          badge: {
            count: 199,
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
