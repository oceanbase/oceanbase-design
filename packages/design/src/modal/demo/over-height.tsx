import React, { useState } from 'react';
import { Button, Modal, token } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

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
        title="Over height Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <div
          style={{
            height: '100vh',
            background: token.colorBgLayout,
            padding: 12,
          }}
        >
          scroll-y is enabled by default when over height.
        </div>
      </Modal>
    </>
  );
};
