import React, { useState } from 'react';
import { Drawer, Button } from '@oceanbase/design';
import overHeight from '../../modal/demo/over-height';

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
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p style={{ height: 500 }}>Some contents...</p>
        <p style={{ height: 500 }}>Some contents...</p>
        <p style={{ height: 500 }}>Some contents...</p>
      </Drawer>
    </>
  );
};
