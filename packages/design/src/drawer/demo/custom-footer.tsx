import React, { useState } from 'react';
import { Drawer, Button, Space, Alert } from '@oceanbase/design';

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
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Some info message</div>
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
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
