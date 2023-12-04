import React, { useState } from 'react';
import { Drawer, Button, Descriptions } from '@oceanbase/design';

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
      >
        <Descriptions column={1}>
          <Descriptions.Item label="Name">John</Descriptions.Item>
          <Descriptions.Item label="Age">18</Descriptions.Item>
          <Descriptions.Item label="Address">Hangzhou, Zhejiang Province</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </>
  );
};
