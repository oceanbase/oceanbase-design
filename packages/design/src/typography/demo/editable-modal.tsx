import React, { useState } from 'react';
import { Input, Modal, Typography } from '@oceanbase/design';

const { Paragraph } = Typography;

const App: React.FC = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [inputValue, setInputValue] = useState(editableStr);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Paragraph
        editable={{
          editing: false,
          onStart: () => {
            setOpen(true);
          },
        }}
      >
        {editableStr}
      </Paragraph>
      <Modal
        title="Editable Text"
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setEditableStr(inputValue);
          setOpen(false);
        }}
      >
        <Input
          defaultValue={editableStr}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
      </Modal>
    </>
  );
};

export default App;
