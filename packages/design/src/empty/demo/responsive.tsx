import React, { useState } from 'react';
import { Button, Card, Empty, Slider, Space } from '@oceanbase/design';

export default () => {
  const [width, setWidth] = useState(720);

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <div>
        <div style={{ marginBottom: 8 }}>Container width: {width}px</div>
        <Slider min={320} max={800} value={width} onChange={setWidth} />
      </div>
      <Card bodyStyle={{ padding: 24 }}>
        <div style={{ width, margin: '0 auto' }}>
          <Empty
            layout="horizontal"
            image={Empty.PRESENTED_IMAGE_GUIDE}
            title="Welcome to OB Smart Diagnosis"
            description="OB Smart Diagnosis is a control panel for database issue diagnosis. It graphically presents detailed database data and helps clients quickly assess operational status."
          >
            <Button type="primary">Open Intelligent Diagnosis</Button>
          </Empty>
        </div>
      </Card>
    </Space>
  );
};
