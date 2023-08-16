import React, { useState } from 'react';
import { Alert, Button, Modal, Space } from '@oceanbase/design';
import { useTimeout } from 'ahooks';

export default () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [done, setDone] = useState(false);

  useTimeout(
    () => {
      setDone(true);
    },
    (successOpen && !done) || (failOpen && !done) ? 3000 : undefined
  );

  return (
    <>
      <Space direction="vertical" size="middle">
        <Button
          type="primary"
          onClick={() => {
            setSuccessOpen(true);
          }}
        >
          Open Progress Modal from loading to success
        </Button>
        <Button
          onClick={() => {
            setFailOpen(true);
          }}
        >
          Open Progress Modal from loading to success
        </Button>
      </Space>
      <Modal.Progress
        title={done ? '🎉 Success to create cluster!' : 'Cluster is creating...'}
        open={successOpen}
        description={
          done
            ? 'Congratulations! please enjoy your OceanBase journey.'
            : 'Cluster is creating, please waiting for a few seconds.'
        }
        onOk={() => {
          setSuccessOpen(false);
          setDone(false);
        }}
        onCancel={() => {
          setSuccessOpen(false);
          setDone(false);
        }}
      />
      <Modal.Progress
        title={done ? '😭 Fail to create cluster!' : 'Cluster is creating...'}
        open={failOpen}
        progress={{
          status: done ? 'exception' : 'normal',
        }}
        description={
          done ? (
            <Alert
              type="error"
              showIcon={true}
              message="Please fix errors or try agin later"
              description="This is error message. This is error message. This is error message. This is error message."
            />
          ) : (
            'Cluster is creating, please waiting for a few seconds.'
          )
        }
        onOk={() => {
          setFailOpen(false);
          setDone(false);
        }}
        onCancel={() => {
          setFailOpen(false);
          setDone(false);
        }}
      />
    </>
  );
};
