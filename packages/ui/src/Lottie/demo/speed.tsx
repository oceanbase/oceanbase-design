import React, { useState } from 'react';
import { Form, Radio } from '@oceanbase/design';
import { Lottie } from '@oceanbase/ui';

export default () => {
  const [speed, setSpeed] = useState(1);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="speed">
          <Radio.Group
            value={speed}
            onChange={e => {
              setSpeed(e.target.value);
            }}
          >
            <Radio.Button value={0.5}>0.5</Radio.Button>
            <Radio.Button value={1}>1</Radio.Button>
            <Radio.Button value={2}>2</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Lottie
        path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
        speed={speed}
        style={{
          height: 200,
        }}
      />
    </div>
  );
};
