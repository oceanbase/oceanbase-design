import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Informational Notes" type="info" showIcon closable onClose={onClose} />
    <Alert message="Success Tips" type="success" showIcon closable onClose={onClose} />
    <Alert message="Warning" type="warning" showIcon closable onClose={onClose} />
    <Alert message="Error" type="error" showIcon closable onClose={onClose} />
    <Alert message="Informational Notes" type="info" showIcon mini closable onClose={onClose} />
    <Alert message="Success Tips" type="success" showIcon mini closable onClose={onClose} />
    <Alert message="Warning" type="warning" showIcon mini closable onClose={onClose} />
    <Alert message="Error" type="error" showIcon mini closable onClose={onClose} />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
      closable
      onClose={onClose}
    />
  </Space>
);

export default App;
