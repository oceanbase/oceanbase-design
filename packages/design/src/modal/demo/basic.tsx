import { Button, ConfigProvider, Modal, theme } from '@oceanbase/design';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  // 在应用外围包裹一次 ConfigProvider 即可
  return (
    <ConfigProvider theme={theme}>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </ConfigProvider>
  );
};
