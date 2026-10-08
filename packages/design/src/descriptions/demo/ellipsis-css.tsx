import React from 'react';
import { Descriptions } from '@oceanbase/design';

export default () => (
  <Descriptions
    title="User Info"
    contentProps={{
      ellipsis: 'css',
    }}
    items={[
      {
        key: '1',
        label: 'UserName',
        children: 'Zhou Maomao',
      },
      {
        key: '2',
        label: 'Telephone',
        children: '1810000000',
        contentProps: {
          copyable: true,
        },
      },
      {
        key: '3',
        label: 'Live',
        children: 'Hangzhou, Zhejiang',
      },
      {
        key: '4',
        label: 'Description',
        children: 'This is a description. This is a description. This is a description.',
      },
      {
        key: '5',
        label: 'Address',
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      },
      {
        key: '6',
        label: 'Remark',
        children: 'No ellipsis for this item. No ellipsis for this item.',
        contentProps: {
          ellipsis: false,
        },
      },
    ]}
  />
);
