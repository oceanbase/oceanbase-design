import React from 'react';
import { Alert, Button, Space } from '@oceanbase/design';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      action={<a>Detail</a>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      closable
      action={<a>Detail</a>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      description="Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      description="Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
  </Space>
);

export default App;
