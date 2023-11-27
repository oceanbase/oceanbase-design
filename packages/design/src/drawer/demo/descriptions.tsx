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
          <Descriptions.Item label="姓名">张三</Descriptions.Item>
          <Descriptions.Item label="年龄">6</Descriptions.Item>
          <Descriptions.Item label="地址">浙江省杭州市</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </>
  );
};
