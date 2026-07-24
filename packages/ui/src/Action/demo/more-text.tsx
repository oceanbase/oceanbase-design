import React from 'react';
import { Space } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';
import { DownOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <Action.Group
      moreText={
        <Space size={4}>
          More
          <DownOutlined />
        </Space>
      }
    >
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>Danger Button</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button>action4</Action.Button>
      <Action.Button>action5</Action.Button>
    </Action.Group>
  );
};
