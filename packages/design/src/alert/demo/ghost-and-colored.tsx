import { Alert, Form, Radio, Space } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [ghost, setGhost] = useState(true);
  const [colored, setColored] = useState(true);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="透明背景" required={true}>
          <Radio.Group
            value={ghost}
            onChange={e => {
              setGhost(e.target.value);
            }}
          >
            <Radio.Button value={true}>是</Radio.Button>
            <Radio.Button value={false}>否</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="全局着色" required={true}>
          <Radio.Group
            value={colored}
            onChange={e => {
              setColored(e.target.value);
            }}
          >
            <Radio.Button value={true}>是</Radio.Button>
            <Radio.Button value={false}>否</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Tips" type="success" showIcon ghost={ghost} colored={colored} />
        <Alert message="Informational Notes" type="info" showIcon ghost={ghost} colored={colored} />
        <Alert message="Warning" type="warning" showIcon ghost={ghost} colored={colored} />
        <Alert message="Error" type="error" showIcon ghost={ghost} colored={colored} />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
          ghost={ghost}
          colored={colored}
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
          ghost={ghost}
          colored={colored}
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          ghost={ghost}
          colored={colored}
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
          ghost={ghost}
          colored={colored}
        />
      </Space>
    </div>
  );
};

export default App;
