import React from 'react';
import { Button, Form, Input, Radio, Space, Typography } from '@oceanbase/design';
import type { FormValidateMode } from '@oceanbase/design';

const modes: FormValidateMode[] = ['onSubmit', 'onBlur', 'onChange', 'onTouched', 'all'];

const modeDescriptions: Record<FormValidateMode, string> = {
  onSubmit: 'Submit before showing errors; live update after failed submit (default).',
  onBlur: 'Validate on blur.',
  onChange: 'Validate on every change (antd legacy default).',
  onTouched: 'Validate on first blur, then on every change.',
  all: 'Validate on blur and change.',
};

export default () => {
  const [mode, setMode] = React.useState<FormValidateMode>('onSubmit');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 480 }}>
      <Radio.Group
        value={mode}
        onChange={e => setMode(e.target.value)}
        optionType="button"
        buttonStyle="solid"
        options={modes.map(value => ({ label: value, value }))}
      />
      <Typography.Text type="secondary">{modeDescriptions[mode]}</Typography.Text>
      <Form
        key={mode}
        validateMode={mode}
        layout="vertical"
        onFinish={values => {
          console.log('Submitted:', values);
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, min: 5, message: 'At least 5 characters' }]}
        >
          <Input placeholder="Try typing, blurring, and submitting" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Space>
  );
};
