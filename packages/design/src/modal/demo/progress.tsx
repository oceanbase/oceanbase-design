import React, { useState } from 'react';
import { Alert, Button, Modal, Space } from '@oceanbase/design';
import { useInterval } from 'ahooks';

export default () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [percent, setPercent] = useState(0);

  const success = percent === 100;
  const fail = percent === 60;

  useInterval(
    () => {
      setPercent(percent + 20);
    },
    (successOpen && !success) || (failOpen && !fail) ? 1000 : undefined
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
          Open Progress Modal from percent to success
        </Button>
        <Button
          onClick={() => {
            setFailOpen(true);
          }}
        >
          Open Progress Modal from percent to fail
        </Button>
      </Space>
      <Modal.Progress
        title={success ? '🎉 Success to create cluster!' : 'Cluster is creating...'}
        open={successOpen}
        progress={{
          percent,
        }}
        description={
          success
            ? 'Congratulations! please enjoy your OceanBase journey.'
            : 'Cluster is creating, please waiting for a few seconds.'
        }
        onOk={() => {
          setSuccessOpen(false);
          setPercent(0);
        }}
        onCancel={() => {
          setSuccessOpen(false);
          setPercent(0);
        }}
      />
      <Modal.Progress
        title={fail ? '😭 Fail to create cluster!' : 'Cluster is creating...'}
        open={failOpen}
        progress={{
          percent,
          status: fail ? 'exception' : 'normal',
        }}
        description={
          fail ? (
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
          setPercent(0);
        }}
        onCancel={() => {
          setFailOpen(false);
          setPercent(0);
        }}
      />
    </>
  );
};
