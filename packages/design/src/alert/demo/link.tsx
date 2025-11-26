import { Alert, Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message={
        <div>
          Success Tips. <a>Link</a>
        </div>
      }
      type="success"
      showIcon
    />
    <Alert
      message={
        <div>
          Informational Notes. <a>Link</a>
        </div>
      }
      type="info"
      showIcon
    />
    <Alert
      message={
        <div>
          Warning. <a>Link</a>
        </div>
      }
      type="warning"
      showIcon
    />
    <Alert
      message={
        <div>
          Error. <a>Link</a>
        </div>
      }
      type="error"
      showIcon
    />
    <Alert
      message={
        <div>
          Success Tips. <a>Link</a>
        </div>
      }
      type="success"
      showIcon
      mini
    />
    <Alert
      message={
        <div>
          Informational Notes. <a>Link</a>
        </div>
      }
      type="info"
      showIcon
      mini
    />
    <Alert
      message={
        <div>
          Warning. <a>Link</a>
        </div>
      }
      type="warning"
      showIcon
      mini
    />
    <Alert
      message={
        <div>
          Error. <a>Link</a>
        </div>
      }
      type="error"
      showIcon
      mini
    />
    <Alert
      message="Success Tips."
      description={
        <div>
          Detailed description and advice about successful copywriting. <a>Link</a>
        </div>
      }
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes."
      description={
        <div>
          Additional description and information about copywriting. <a>Link</a>
        </div>
      }
      type="info"
      showIcon
    />
    <Alert
      message="Warning."
      description={
        <div>
          This is a warning notice about copywriting. <a>Link</a>
        </div>
      }
      type="warning"
      showIcon
    />
    <Alert
      message="Error."
      description={
        <div>
          This is an error message about copywriting. <a>Link</a>
        </div>
      }
      type="error"
      showIcon
    />
  </Space>
);

export default App;
