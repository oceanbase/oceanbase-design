import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      layout="horizontal"
      image={Empty.PRESENTED_IMAGE_GUIDE}
      title="Welcome to OB Smart Diagnosis"
      description={
        <>
          <div>• OB Smart Diagnosis is a control panel for database issue diagnosis</div>
          <div>• Visualize detailed database data graphically</div>
          <div>
            • Helps customers quickly assess database health and provides recommendations for
            resolving issues
          </div>
        </>
      }
    >
      <Button type="primary">Start Smart Diagnosis</Button>
    </Empty>
  );
};
