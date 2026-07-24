import React, { useState } from 'react';
import { Card, Col, Row, Tooltip, Radio, Form } from '@oceanbase/design';
import type { TooltipType } from '@oceanbase/design/es/tooltip';

const App: React.FC = () => {
  const [type, setType] = useState<TooltipType>('default');
  return (
    <div>
      <Form style={{ marginBottom: 24 }}>
        <Form.Item label="type" required={true}>
          <Radio.Group
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="success">success</Radio.Button>
            <Radio.Button value="info">info</Radio.Button>
            <Radio.Button value="warning">warning</Radio.Button>
            <Radio.Button value="error">error</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Row gutter={24}>
        <Col span={12}>
          <Tooltip title="This is prompt text" type={type} mouseFollow={true}>
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>Normal content</h2>
              <div>Tooltip is positioned at the bottom-right of the cursor by default</div>
            </Card>
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip
            title="This is prompt text. This is prompt text. This is prompt text. This is prompt text. This is prompt text."
            type={type}
            mouseFollow={true}
          >
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>Long content</h2>
              <div>Tooltip position adjusts automatically as the mouse moves</div>
            </Card>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default App;
