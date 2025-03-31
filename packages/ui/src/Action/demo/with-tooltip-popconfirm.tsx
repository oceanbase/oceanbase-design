import React from 'react';
import { Popconfirm } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group>
      <Action.Button type="primary" tooltip="This is tooltip">
        action1
      </Action.Button>
      <Popconfirm placement="bottom" title="Confirm to delete it?">
        <Action.Button danger tooltip="This is tooltip">
          危险按钮
        </Action.Button>
      </Popconfirm>
      <Action.Button>action3</Action.Button>
      <Action.Button>action4</Action.Button>
      <Action.Button>action5</Action.Button>
    </Action.Group>
  );
};
