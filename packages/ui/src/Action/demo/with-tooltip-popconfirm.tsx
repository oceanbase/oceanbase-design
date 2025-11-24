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
        <Action.Button danger>危险按钮</Action.Button>
      </Popconfirm>
      <Action.Button>action3</Action.Button>
      <Action.Button tooltip="This is tooltip">action4</Action.Button>
      <Popconfirm
        placement="bottom"
        title="Confirm to delete it?"
        getPopupContainer={triggerNode =>
          triggerNode
            ? // to prevent the popconfirm from being closed when leave the Action.Button
              (triggerNode.parentNode?.parentNode?.parentNode?.parentNode as HTMLElement)
            : document.body
        }
        onConfirm={e => {
          // to prevent the popconfirm from being closed when click confirm button
          e.stopPropagation();
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(null);
            }, 1000);
          });
        }}
      >
        <Action.Button
          danger
          onClick={e => {
            // to prevent the popconfirm from being closed when click the Action.Button
            e.stopPropagation();
          }}
        >
          action5
        </Action.Button>
      </Popconfirm>
    </Action.Group>
  );
};
