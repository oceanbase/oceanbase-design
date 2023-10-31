import { Button, Space, Tooltip, message } from '@oceanbase/design';
import { CloseCircleOutlined, ReloadOutlined, SyncOutlined } from '@oceanbase/icons';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  return (
    <Space size={24}>
      <Tooltip
        title="This is prompt text"
        open={open1}
        closeIcon={true}
        onClose={() => {
          setOpen1(false);
          message.success('Default close icon is clicked');
        }}
      >
        <Button>Default close icon</Button>
      </Tooltip>
      <Tooltip
        title="This is prompt text"
        open={open2}
        closeIcon={<CloseCircleOutlined />}
        onClose={() => {
          setOpen2(false);
          message.success('Custom close icon is clicked');
        }}
      >
        <Button>Custom close icon</Button>
      </Tooltip>
      <Button
        icon={<ReloadOutlined />}
        onClick={() => {
          setOpen1(true);
          setOpen2(true);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

export default App;
