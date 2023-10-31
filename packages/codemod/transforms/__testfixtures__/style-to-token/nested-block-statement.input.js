import React from 'react';
import { Alert, Button, Tooltip } from '@oceanbase/design';

const Demo = () => {
  const columns = [{
    render: () => {
      return <Tooltip color="#ffffff" backgroundColor="#fff1f0" borderColor="#fafafa" border="1px solid #fafafa" />;
    },
  }];
  return (
    <div>
      <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', background: 'rgba(0, 0, 0,0.65)', backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid #d9d9d9' }} />
      <Button style={{ color: '#1890ff', background: '#52c41a', backgroundColor: '#faad14', borderColor: '#ff4D4F' }}></Button>
    </div>
  );
};

export default Demo;