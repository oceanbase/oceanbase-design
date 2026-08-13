import React, { useState } from 'react';
import { ConfigProvider, Form, Input, Modal, Button } from '@oceanbase/design';

export default function FormInModalPage() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <ConfigProvider>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Modal title="Create" open={open} onOk={() => form.submit()} onCancel={() => setOpen(false)}>
        <Form form={form} layout="vertical" onFinish={() => setOpen(false)}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}
