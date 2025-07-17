import React, { useState } from 'react';
import { Button, Modal, theme } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open over height Modal
      </Button>
      <Modal
        centered
        title="Over height Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        bodyStyle={{
          borderRadius: token.borderRadius,
        }}
      >
        <div
          style={{
            height: 1000,
            background: token.colorBgLayout,
            padding: 12,
          }}
        >
          some messages...some messages...
        </div>
      </Modal>
    </>
  );
};
