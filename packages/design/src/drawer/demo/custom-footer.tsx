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
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div>底部说明文案</div>
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
