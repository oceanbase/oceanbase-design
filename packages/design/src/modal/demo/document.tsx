import React, { useState } from 'react';
import { Button, Modal, message } from '@oceanbase/design';
import { BookOutlined } from '@oceanbase/icons';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen1(true);
        }}
        style={{ marginRight: 8 }}
      >
        Document with URL
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setOpen2(true);
        }}
        style={{ marginRight: 8 }}
      >
        Document with Function
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setOpen3(true);
        }}
      >
        Document with Custom Icon
      </Button>
      <Modal
        title="Modal Title"
        document="https://www.oceanbase.com"
        open={open1}
        onOk={() => {
          setOpen1(false);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="Modal Title"
        document={() => {
          message.info('Click document');
        }}
        open={open2}
        onOk={() => {
          setOpen2(false);
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="Modal Title"
        document={
          <BookOutlined
            onClick={() => {
              message.info('Click document');
            }}
          />
        }
        open={open3}
        onOk={() => {
          setOpen3(false);
        }}
        onCancel={() => {
          setOpen3(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
