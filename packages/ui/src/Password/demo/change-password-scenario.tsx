import React, { useState } from 'react';
import { Button, Form, Input, Modal } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Change password
      </Button>
      <Modal
        open={open}
        title="Change password"
        onCancel={() => setOpen(false)}
        onOk={() => form.validateFields()}
        destroyOnClose
      >
        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name="currentPassword"
            label="Current password"
            rules={[{ required: true, message: 'Please enter current password' }]}
          >
            <Password autoComplete="current-password" />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="New password"
            rules={[{ required: true, message: 'Please enter new password' }]}
          >
            <Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm new password"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please enter new password again' },
              {
                validator: (_, value) => {
                  const pwd = form.getFieldValue('newPassword');
                  if (value !== pwd) {
                    return Promise.reject(new Error('The two passwords do not match'));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
