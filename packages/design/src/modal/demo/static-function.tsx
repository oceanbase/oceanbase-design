import React from 'react';
import { Button, Modal, Space } from '@oceanbase/design';

export default () => (
  <Space>
    <Button
      onClick={() => {
        Modal.confirm({
          title: 'This is a confirm modal',
          content: 'some messages...some messages...',
        });
      }}
    >
      Confirm
    </Button>
    <Button
      onClick={() => {
        Modal.info({
          title: 'This is a info message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Info
    </Button>
    <Button
      onClick={() => {
        Modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Success
    </Button>
    <Button
      onClick={() => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Error
    </Button>
    <Button
      onClick={() => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Warning
    </Button>
  </Space>
);
