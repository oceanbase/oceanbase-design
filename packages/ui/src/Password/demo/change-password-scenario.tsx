import React, { useState } from 'react';
import { Button, Form, Input, Modal } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        修改密码
      </Button>
      <Modal
        open={open}
        title="修改密码"
        okText="确定"
        cancelText="取消"
        onCancel={() => setOpen(false)}
        onOk={() => form.validateFields()}
        destroyOnClose
      >
        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name="currentPassword"
            label="当前密码"
            rules={[{ required: true, message: '请输入当前密码' }]}
          >
            <Password mode="plain" />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="新密码"
            rules={[{ required: true, message: '请输入新密码' }]}
          >
            <Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="确认新密码"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: '请再次输入新密码' },
              {
                validator: (_, value) => {
                  const pwd = form.getFieldValue('newPassword');
                  if (value !== pwd) {
                    return Promise.reject(new Error('两次输入的密码不一致'));
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
