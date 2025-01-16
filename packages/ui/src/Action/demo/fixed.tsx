import React from 'react';
import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group size={2}>
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>危险按钮</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button fixed>fixed4</Action.Button>
      <Action.Button fixed>action5</Action.Button>
    </Action.Group>
  );
};
