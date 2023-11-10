import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

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
        onClose={() => {
          setOpen(false);
        }}
        extra="底部说明文案"
        footer={
          <Space>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              取消
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setOpen(false);
              }}
            >
              确认
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
