import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';

import { useCallback } from 'react';

export default () => {
  const linkOnClick = useCallback(() => {
    const promise: Promise<void> = new Promise(resolve => {
      setTimeout(() => {
        message.success('成功点击link');
        resolve();
      }, 2000);
    });
    return promise;
  }, []);

  return (
    <Action.Group enableLoading size={2}>
      <Action.Link key="action1" onClick={linkOnClick}>
        action1
      </Action.Link>
      <Action.Link key="action2" onClick={linkOnClick}>
        action2
      </Action.Link>
      <Action.Link key="action3" onClick={linkOnClick}>
        action3
      </Action.Link>
      <Action.Link key="action4" onClick={linkOnClick}>
        action4
      </Action.Link>
      {/** 基础 loading 控制 */}
      <Action.Link key="action5" loading>
        action5
      </Action.Link>
    </Action.Group>
  );
};
