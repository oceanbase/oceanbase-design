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
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Ok
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Space>
            <div>Some info message</div>
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
