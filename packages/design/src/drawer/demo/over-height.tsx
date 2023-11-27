import React, { useState } from 'react';
import { Drawer, Button, theme, Space } from '@oceanbase/design';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const { token } = theme.useToken();

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Open Drawer with footer
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Open Drawer without footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Drawer with footer"
        onOk={() => {
          setOpen2(false);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <div style={{ height: '100vh', backgroundColor: token.colorBgLayout }}></div>
      </Drawer>
      <Drawer
        open={open2}
        title="Drawer without footer"
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <div style={{ height: '100vh', backgroundColor: token.colorBgLayout }}></div>
      </Drawer>
    </>
  );
};
