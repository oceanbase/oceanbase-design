import React, { useState } from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';

export default () => {
  const [size, setSize] = useState('middle');

  return (
    <div>
      <Form
        style={{ marginBottom: '30px' }}
      >
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
            <Radio.Button value='large'>Large</Radio.Button>
            <Radio.Button value='middle'>Default</Radio.Button>
            <Radio.Button value='small'>Small</Radio.Button>
            <Radio.Button value={300}>300px</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Row>
        <Col span={6}>
          <Score
            size={size}
            value={50}
          />
        </Col>
        <Col span={6} >
          <Score
            size={size}
            value={60}
          />
        </Col>
        <Col span={6} >
          <Score
            size={size}
            value={70}
          />
        </Col>
        <Col span={6} >
          <Score
            size={size}
            value={85}
          />
        </Col>
      </Row>
    </div>
  );
};
