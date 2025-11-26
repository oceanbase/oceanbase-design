import { Alert, Form, Radio, Space } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [ghost, setGhost] = useState(true);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="ghost" required={true}>
          <Radio.Group
            value={ghost}
            onChange={e => {
              setGhost(e.target.value);
            }}
          >
            <Radio.Button value={true}>true</Radio.Button>
            <Radio.Button value={false}>false</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Tips" type="success" showIcon ghost={ghost} />
        <Alert message="Informational Notes" type="info" showIcon ghost={ghost} />
        <Alert message="Warning" type="warning" showIcon ghost={ghost} />
        <Alert message="Error" type="error" showIcon ghost={ghost} />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
          ghost={ghost}
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
          ghost={ghost}
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          ghost={ghost}
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
          ghost={ghost}
        />
      </Space>
    </div>
  );
};

export default App;
