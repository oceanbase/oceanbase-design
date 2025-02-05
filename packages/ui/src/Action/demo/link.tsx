import React from 'react';
import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group>
      <Action.Link visible={false}>action1</Action.Link>
      <Action.Link disabled tooltip={'禁用展示tooltip'}>
        禁用提示
      </Action.Link>
      <Action.Link
        onClick={() => {
          console.log('hello~~');
        }}
      >
        action3
      </Action.Link>
      <Action.Link
        onClick={async () => {
          return new Promise(resolve => {
            setTimeout(() => {
              console.log('hello2~~');
              resolve();
            }, 1000);
          });
        }}
      >
        action4
      </Action.Link>
      <Action.Link disabled>action5</Action.Link>
    </Action.Group>
  );
};
