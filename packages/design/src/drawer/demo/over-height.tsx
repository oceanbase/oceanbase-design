import React, { useState } from 'react';
import { Drawer, Button, theme } from '@oceanbase/design';

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
        <div style={{ height: '100vh', backgroundColor: token.colorBgLayout }}></div>
      </Drawer>
    </>
  );
};
