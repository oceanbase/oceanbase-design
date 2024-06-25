import React, { useState } from 'react';
import { Button, Card, Modal, Spin } from '@oceanbase/design';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.confirm({
            title: 'This is first Modal.confirm',
            onOk: () => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                Modal.confirm({
                  title: 'This is second Modal.confirm',
                });
              }, 2000);
            },
          });
        }}
      >
        Click
      </Button>
      <div style={{ marginTop: 16 }}>
        {loading ? (
          <Spin />
        ) : (
          <Card title="Card title" style={{ width: 300 }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
        )}
      </div>
    </>
  );
};

export default App;
