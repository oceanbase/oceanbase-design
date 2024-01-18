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
            <Radio.Button value="light">light</Radio.Button>
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
              <h2>普通内容</h2>
              <div>Tooltip 位置默认为鼠标右下角</div>
            </Card>
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip
            title="This is prompt text. This is prompt text. This is prompt text. This is prompt text."
            type={type}
            mouseFollow={true}
          >
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>较长内容</h2>
              <div>Tooltip 位置会根据鼠标移动自动调整</div>
            </Card>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default App;
