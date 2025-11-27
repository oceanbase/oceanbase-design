/**
 * iframe: 500
 */
import React, { useState } from 'react';
import { Modal } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { PlusOutlined } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const showModal = isOpen => {
    if (isOpen === undefined) {
      setOpen(!open);
    } else {
      setOpen(isOpen);
    }
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <SideTip type="primary" icon={<PlusOutlined />} onClick={showModal} open={open} id="modal" />
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
