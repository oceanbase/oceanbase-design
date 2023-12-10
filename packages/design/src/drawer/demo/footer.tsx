import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Enable Drawer footer by onOk
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Enable Drawer footer by footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Enable Drawer footer by onOk"
        onOk={() => {
          setOpen1(false);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        open={open2}
        title="Enable Drawer footer by footer"
        onOk={() => {
          setOpen2(false);
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
