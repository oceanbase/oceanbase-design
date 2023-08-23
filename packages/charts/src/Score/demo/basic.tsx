import React, { useState } from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';

export default () => {
  const [size, setSize] = useState('large');

  return (
    <div>
      <Form
        layout="horizontal"
        style={{ marginBottom: '30px' }}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Size">
              <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                <Radio.Button value='large'>Large</Radio.Button>
                <Radio.Button value='middle'>Default</Radio.Button>
                <Radio.Button value='small'>Small</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
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
